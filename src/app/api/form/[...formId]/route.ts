import ConnectDB from "@/config/database";
import FormModel from "@/models/Form";
import QuestionModel from "@/models/Question";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest, response: NextResponse) => {
    const urls = request.url.split("/");
    console.log(urls[urls.length - 1]);
    const formId = urls[urls.length - 1];

    try {
        await ConnectDB();

        const form = await FormModel.findById(formId).exec();
        if (form) {
            const questions = await QuestionModel.find({ formId: formId });
            return NextResponse.json({ message: "Get Form", form: form, questions: questions }, { status: 201 });
        }
        return NextResponse.json({ message: "Form ID is required" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ message: "Form ID is required" }, { status: 400 });
    }
}
