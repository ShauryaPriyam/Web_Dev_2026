import {model, Schema} from "mongoose";

const messageSchema = new Schema({
    receiver : Schema.Types.ObjectId,
    content : String,
    sender : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
})

const Message = model(messageSchema);
export default Message;