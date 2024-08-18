import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema({
    formId: {
        type: Schema.ObjectId,
        required: true,
    },
});


let ApplicationModel: mongoose.Model<any>
try {
    ApplicationModel = mongoose.model("applications")
}
catch (error) {
    ApplicationModel = mongoose.model("applications", applicationSchema)
}
export default ApplicationModel;