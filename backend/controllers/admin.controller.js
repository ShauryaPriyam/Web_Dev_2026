import Report from "../models/reportSchema.js" 
import User from "../models/userSchema.js"
import Post from "../models/postSchema.js"

/**
 * categorised users according to role, to provide more controll
 */
const getAllUsers = async (req, res) => {
    const nUser = await User.aggregate([
        {
            $group : {
                _id : "$role",
                count : {
                    $sum : 1
                }
            }
        }
    ])
    res.json(Object.fromEntries(nUser.map(i=>[i._id,i.count])))
}

/**
 * getReports function expects a {Number} "page" because there may be a lot of Reports at the same time, 
 * having a pagination will limit the data load sent to the client
 * Usage : Start the page value from 1 and increment thereafter
 */
const getReports = async (req, res) => {
    const page = req.body.page;
    // it is supposed that only pending reports are to be fetched
    // (keeping/deleting) resolved reports is a topic of discussion 
    const reports = await Report.find({status : "pending"}).skip(10*(page-1)).limit(10)
    res.json({ reports })
}


const deletePostByAdmin = async (req,res) =>{
    const postId = req.params.postId;
    const deleted = await Post.findByIdAndDelete(postId);
    if(!deleted){
        return res.json({
            error : true,
            message : "invalid postId"
        })
    }
    res.json({
        message : "deleted successfully"
    })
}

export {
  getAllUsers,
  getReports,
  deletePostByAdmin
}