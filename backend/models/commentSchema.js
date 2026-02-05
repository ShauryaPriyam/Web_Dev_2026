import {model, Schema} from "mongoose";

const commentSchema = new Schema({
    refObject : Schema.Types.ObjectId,
    content : String,
})

const Comment = model(commentSchema);
export default Comment;