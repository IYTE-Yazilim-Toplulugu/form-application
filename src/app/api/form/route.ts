import ConnectDB from "@/config/database";
import FormModel from "@/models/Form";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest, response: NextResponse) => {
    try {
        await ConnectDB();
        const form = await FormModel.find({});
        if (form) {
            return NextResponse.json({ message: "Get Form", forms: form }, { status: 201 });
        }
        return NextResponse.json({ message: "Form ID is required" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ message: "Form ID is required" }, { status: 400 });
    }
}
