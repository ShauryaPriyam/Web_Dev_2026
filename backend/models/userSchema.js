import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    clerkUserId : String,
    email : String,
    // no need to store password as we are using clerk for authentication
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

export default User;