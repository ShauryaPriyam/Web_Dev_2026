import User from "../models/userSchema.js"
import { clerkClient, getAuth } from "@clerk/express"
import jwt from "jsonwebtoken"

const signup = async (req, res) => {
    // is the info not fake
    let newUser = null;

    if (!req.auth) {
        return res.json({
            error: true,
            message: "invalid session"
        })
    }

    let { userId } = getAuth(req);

    try {
        newUser = await clerkClient.users.getUser(userId);
    } catch {
        return res.json({
            error: true,
            message: "something is wrong with your signup request",
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

    /*
    
        // valid iitrpr email check
    
        const email = newUser.emailAddresses[0]?.emailAddress;
        if(!email.endsWith("@iitrpr.ac.in")){
            return res.json({
                error: true,
                message: "external email not allowed",
            })
        }
    
    */

    // user creation
    let { username, name } = req.body;
    try {
        const created = await User.create({
            username, name, email, clerkUserId: req.auth.clerkUserId,
            role: "user",
            posts: [],
            notifications: [],
        })
        return res.json({
            message: "signup successfull",
        })
    } catch {
        res.json({
            error: true,
            message: "something went wrong",
        })
    }
}

const login = async (req, res) => {
    let user = null;

    if (!req.auth) {
        return res.json({
            error: true,
            message: "invalid session"
        })
    }

    let { userId } = getAuth(req);

    try {
        user = await clerkClient.users.getUser(userId);
    } catch {
        return res.json({
            error: true,
            message: "something is wrong with your request",
        })
    }
    const email = user?.emailAddresses[0]?.emailAddress;
    const found = await User.findOne({ email }, "username role posts email notifications");
    if (found) {
        res.cookie("token", jwt.sign({ userId: found._id }, process.env.JWT_SECRET), {
            httpOnly: true,
        });
        return res.json({
            accountInfo: found,
        });
    } else {
        return res.json({
            error: true,
            message: "kindly signup first",
        });
    }
}

const update = async (req, res) => {

}

const handleBoth = async (req, res) => {

    if (!req.auth) {
        return res.json({
            error: true,
            message: "invalid session"
        })
    }

    let { userId } = getAuth(req);

    let client = await clerkClient.users.getUser(userId);
    const exists = await User.exists({ email : client.emailAddresses.at(0) });
    if(exists){
        login(req,res);
    } else {
        signup(req,res);
    }
}

function logout(req, res) {
    res.clearCookie("token");
    return res.json({
        message: "logged out successfully",
    })
}

export {
    signup,
    login,
    handleBoth,
    logout
}