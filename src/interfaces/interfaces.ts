import { Date, ObjectId } from "mongoose";

export interface QuestionInterface {
    _id: ObjectId;
    formId: ObjectId;
    question: string;
    type: string;
    isRequired: Boolean;
    description: string;
    nameAttribute: string;
    options: string[];
}


export interface FormInterface {
    _id: ObjectId;
    formName: string;
    description: string;
    image: string;
    bgColor: string;
    isActive: Boolean;
    createdAt: Date;
    updatedAt: Date;
    button: string;
    buttonColor: string;
    textColor: string;
}

