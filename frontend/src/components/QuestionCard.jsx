import React from 'react'
import { Link } from 'react-router-dom'

const QuestionCard = ( {post} ) => {
  const questionId = post?._id
  return (
    <Link to={`/post/${questionId}`}>
      <article className="bg-darkCard rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer mb-5 ">

        {/* Title */}
        <h1 className="text-xl font-semibold text-accent mb-2">
          This is a question
        </h1>

        {/* Meta */}
        <p className="text-sm text-gray-400 mb-4">
          Asked today
        </p>

        {/* Preview */}
        <p className="text-lightText leading-relaxed line-clamp-3">
          My question (first few lines of the question's description)
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs bg-dark px-3 py-1 rounded text-accent">
            tag1
          </span>
          <span className="text-xs bg-dark px-3 py-1 rounded text-accent">
            tag2
          </span>
          <span className="text-xs bg-dark px-3 py-1 rounded text-accent">
            tag3
          </span>
        </div>

      </article>
    </Link>
  )
}

export default QuestionCard
