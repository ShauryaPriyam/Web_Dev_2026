import React, { useState } from 'react'
import AnswerCard from '../components/AnswerCard'
import { useEffect} from 'react'
import QuestionCardInPage from '../components/QuestionCardInPage'

const QuestionPage = () => {
  
  const [answers, setAnswers] = useState([
    {_id : '123',
      content: "hello there"
    }
  ]);
  useEffect(() => {
    fetchAnswers()
  }, [])
  
  const fetchAnswers = async () => {
    // Api call
    // const ans = api.get()
    // setAnswers(ans)
  }
  
  const displayAllAnswers = () => {
    return (
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          {answers.length} Answer{answers.length > 1 && 's'}
        </h2>

        <div className="space-y-6">
          {answers.map((answer) => (
            <AnswerCard key={answer._id} answer={answer} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className="bg-dark text-lightText min-h-screen flex justify-center">
      <main className="w-full max-w-4xl px-4 py-8">
        <QuestionCardInPage />

        {/* Answer Section */}
        {answers.length !== 0 && displayAllAnswers()}
      </main>
    </div>
  )
}

export default QuestionPage
