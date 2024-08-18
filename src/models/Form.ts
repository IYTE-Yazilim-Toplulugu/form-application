import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
    formTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
        required: true,
    },
    isActive: {
        type: String,
        required: true,
    },
    button: {
        type: String,
        required: true,
    },
    buttonColor: {
        type: String,
        required: true,
    },
    textColor: {
        type: String,
        required: true,
    },
}, { timestamps: true });



let FormModel: mongoose.Model<any>
try {
    FormModel = mongoose.model("forms")
}
catch (error) {
    FormModel = mongoose.model("forms", formSchema)
}
export default FormModel;