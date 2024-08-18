import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
    formId: {
        type: Schema.ObjectId,
        required: true,
    },
    applicationId: {
        type: Schema.ObjectId,
        required: true,
    },
    questionId: {
        type: Schema.ObjectId,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});


let AnswerModel: mongoose.Model<any>
try {
    AnswerModel = mongoose.model("answers")
}
catch (error) {
    AnswerModel = mongoose.model("answers", answerSchema)
}
export default AnswerModel;