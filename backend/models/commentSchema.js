import {model, Schema} from "mongoose";

const commentSchema = new Schema({
    refObject : Schema.Types.ObjectId,
    content : String,
    commenter : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
})

const Comment = model(commentSchema);
export default Comment;