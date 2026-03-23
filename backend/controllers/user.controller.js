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

const updateUserProfile = async (req, res) => {
    const { userId } = req.params;
    const { username, role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, { username, role }, { new: true });
        res.json({ 
            error: false, 
            message: "User profile updated successfully", 
            user 
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: error.message 
        });
    }
};

const followUser = async (req, res) => {
    const { userId } = req.params;
    const { followerId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ 
                error: true, 
                message: "User not found" 
            });
        }
        user.followers.push(followerId);
        await user.save();
        res.json({ 
            error: false,
            message: "User followed successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: error.message 
        });
    }
};

const unfollowUser = async (req, res) => {
    const { userId } = req.params;
    const { followerId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ 
                error: true, 
                message: "User not found" 
            });
        }

        user.followers = user.followers.filter(id => id.toString() !== followerId);
        await user.save();

        res.json({ 
            error: false, 
            message: "User unfollowed successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            error: true, 
            message: error.message 
        });
    }
};

export {
    getUserProfile,
    updateUserProfile,
    followUser,
    unfollowUser
}