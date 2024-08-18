import ConnectDB from "@/config/database";
import AnswerModel from "@/models/Answer";
import ApplicationModel from "@/models/Application";
import FormModel from "@/models/Form";
import QuestionModel from "@/models/Question";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest, response: NextResponse) => {
    try {
        await ConnectDB();
    } catch (error) {
        
    }
    const data = await request.json();
    return NextResponse.json({ message: "Form Saved", formId: data["formId"], questions: data["responses"] }, { status: 201 });
}