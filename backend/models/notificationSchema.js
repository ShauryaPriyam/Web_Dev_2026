
import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
    userId : Schema.Types.ObjectId,
    message : String,
    read : Boolean
})
const Notification = model("Notification", notificationSchema);

export default Notification;