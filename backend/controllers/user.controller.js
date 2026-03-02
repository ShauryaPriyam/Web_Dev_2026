import User from "../models/userSchema.js"

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.params.userId,"username role posts");
    if(user){
        res.json({
            user
        })
    } else {
        res.json({
            error : true,
            message : "not found user is id "+String(req.params.userId)
        })
    }
}

const updateUserProfile = (req,res) => {

}

const followUser = (req,res) => {

}

const unfollowUser = (req,res) => {

}

export {
    getUserProfile,
    updateUserProfile,
    followUser,
    unfollowUser
}