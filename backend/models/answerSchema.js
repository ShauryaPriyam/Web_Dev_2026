import { Schema, model } from "mongoose";

const answerSchema = new Schema({
    questionId : {
        type : Schema.Types.ObjectId,
        index : true,
        required : true
        // we dont need ref here because we already would have fetched it after a Post
    },
    content : {
        type : String,
        required : true
    },
    authorRef : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    votes : {
        type : Number,
        default : 0
    }
})
const Answer = model("Answer",answerSchema);

export default Answer;