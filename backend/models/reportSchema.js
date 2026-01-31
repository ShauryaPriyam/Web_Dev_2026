import { Schema, model } from "mongoose";

const reportSchema = new Schema({
    itemId : Schema.Types.ObjectId,
    type : {
        type : String,
        enum : ["post", "answer"]
    },
    reporterId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    status : {
        type : String,
        enum : ["resolved","pending"],
        default : "pending"
    },
    reason : String
})
const Report = model("Report", reportSchema)

export default Report;