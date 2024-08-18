import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    formId: {
        type: Schema.ObjectId,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    inputType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isRequired: {
        type: Boolean,
        required: true,
    },
    nameAttribute: {
        type: String,
        required: true,
    }
});


let QuestionModel: mongoose.Model<any>
try {
    QuestionModel = mongoose.model("questions")
}
catch (error) {
    QuestionModel = mongoose.model("questions", questionSchema)
}
export default QuestionModel;