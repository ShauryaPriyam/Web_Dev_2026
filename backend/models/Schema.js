import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    email : String,
    passwordHash : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["user", "admin", "moderator"],
        default : "user"
    },
    posts : [{
        type : Schema.Types.ObjectId,
        ref : "Post"
    }],
    notifications : [{
        type : Schema.Types.ObjectId,
        ref : "Notif"
    }]
})
const User = model("User",userSchema);

const postSchema = new Schema({
    title : String,
    content : String,
    tags : [String],
    authorRef : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    votes : {
        type : Number,
        default : 0
    },
    imageURL : String
},{
    timestamps : true
})
const Post = model("Post", postSchema);

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

const notifSchema = new Schema({
    // The pdf did not define what userId is, assuming it to be the object id of the user, else the user should have a userId field
    userId : Schema.Types.ObjectId,
    message : String,
    read : Boolean
})
const Notif = model("Notif", notifSchema);
// this is intentionally written as Notif instead of Notification because
// there is a Notification api in javascript for some browsers

const reportSchema = new Schema({
    //postId/answerId, reporterId, reason, status
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


export {
    User,
    Post,
    Answer,
    Notif,
    Report
}