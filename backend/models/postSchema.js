import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title : String,
    content : String,
    tags : [String],
    authorRef : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    votes : {
        type : Number,
        default : 0,
    },
    imageURL : String
},{
    timestamps : true
})
const Post = model("Post", postSchema);

export { Post };
