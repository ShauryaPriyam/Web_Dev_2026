import User from "../models/userSchema.js"
import clerkClient from "@clerk/clerk-sdk-node"


const signup = async (req, res) => {
    // is the info not fake
    let newUser = null;

    try {
        newUser = await clerkClient.clients.getClient(req.auth.clerkUserId);
    } catch {
        return res.json({
            error : true,
            message : "something is wrong with your signup request",
        })
    }
    // valid username check
    let occupied = await User.exists({ username: req.body.username });
    if (occupied) {
        return res.json({
            error: true,
            message: "username already occupied",
        })
    }
    // valid iitrpr email check
    const email = newUser.emailAddresses[0]?.emailAddress;
    if(!email.endsWith("@iitrpr.ac.in")){
        return res.json({
            error: true,
            message: "external email not allowed",
        })
    }
    // user creation
    let { username, name } = req.body;
    try {
        const created = await User.create({
            username, name, email, clerkUserId : req.auth.clerkUserId,
            role: "user",
            posts: [],
            notifications: [],
        })
        return res.json({
            message : "signup successfull",
        })
    } catch {
        res.json({
            error : true,
            message : "something went wrong",
        })
    }
}

const login = async (req, res) =>{
    let user = null;
    try {
        user = await clerkClient.clients.getClient(req.auth.clerkUserId);
    } catch {
        return res.json({
            error : true,
            message: "something is wrong with your request",
        })
    }
    const email = user?.emailAddresses[0]?.emailAddress;
    const found = await User.findOne({email},"username role posts email notifications");
    if(found){
        return res.json({
            accountInfo : found,
        })
    } else {
        return res.json({
            error : true,
            message : "kindly signup first",
        })
    }
}

const update = async (req, res) => {

}

export {
    signup,
    login
}