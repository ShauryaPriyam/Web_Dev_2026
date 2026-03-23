import React from 'react'
import { useState } from 'react'

const AnswerCard = ({ answer }) => {
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        try {
            // const res = await fetch(

            // )
            // const data = await res.json()
            setComments(data)
        } catch (error) {
            console.error('Failed to load comments', error)
        }
    }
    return (
        <section className="mt-8">

            <div className="bg-darkCard rounded-lg p-6 shadow-md">
                <p>{answer.content}</p>

                {/* Comment toggle */}
                <button
                    onClick={() => fetchComments()}
                    className="mt-4 text-sm text-primary hover:underline"
                >
                    {showComments ? 'Hide comments' : 'View comments'}
                </button>

                {/* Comment Section */}
                {showComments && (
                    <div className="mt-4 border-t border-gray-700 pt-4 space-y-3">
                        {comments.length === 0 && (
                            <p className="text-sm text-gray-500">No comments yet</p>
                        )}

                        {comments.map((comment) => (
                            <div key={comment._id} className="text-sm text-gray-300">
                                <p className="mb-1">{comment.content}</p>
                                <p className="text-xs text-gray-500">– {comment.author}</p>
                            </div>
                        ))}

                        <input
                            type="text"
                            placeholder="Add a comment..."
                            className="w-full bg-dark border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}

export default AnswerCard