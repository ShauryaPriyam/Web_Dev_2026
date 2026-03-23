const addComment = async (req, res) => {

    const { refObject, content } = req.body;
    const commenter = req.user._id;

    try {
        const comment = await Comment.create({ refObject, content, commenter });
        res.status(201).json({
            error: false,
            message: "Comment added successfully",
        });
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};


const deleteComment = async (req, res) => {

    const { commentId } = req.params;

    try {
        await Comment.findByIdAndDelete(commentId);
        res.json({
            error: false,
            message: "Comment deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
}

export { 
    addComment, 
    deleteComment 
}