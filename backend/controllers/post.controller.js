import { Post } from "../models/Schema.js";

const deletePost = async (req, res) => {
    const postId = req.params.postId;
    const deleted = await Post.findByIdAndDelete(postId);
    if (!deleted) {
        return res.status(404).json({
            error: true,
            message: `no post exists with id ${postId}`
        })
    }
    res.status(200).json({
        error: false,
        message: "Post deleted successfully"
    })
}

const createPost = async (req, res) => {
    let created = null;
    if(!req.body.title || !req.body.content){
        return res.json({
            error : true,
            message : "title or content cannot be empty"
        })
    }
    try {
        created = await Post.create({
            title : req.body.title,
            content : req.body.content,
            tags : req.body.tags,
            imageURL : req.body.imageURL,

            authorRef : req.userId // needs to be set by a middleware
        })
    } catch {
        res.json({
            error : true,
            message : "an error occured in creation of the post"
        })
    }
}

const getPostById = async (req,res) => {
    const postId = req.params.postId;
    const p = await Post.findById(postId);
    if(!p){
        return res.json({
            error : true,
            message : `No post found with the id ${postId}`
        })
    }
    res.json({
        Post : p
    })
}

/* returns number of posts on the website
NOTE : to get posts for the feed, or based on tags -> refer to 'search.controller.js'
*/
const getAllPosts = async (req,res) => {
    const num = Post.countDocuments();
    res.json({
        count : num
    })
}

export {
    createPost,
    getAllPosts,
    getPostById,
    deletePost
}