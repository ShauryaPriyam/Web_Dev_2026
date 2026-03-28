import React from 'react'

const QuestionCardInPage = () => {
    return (
        <>
            < header className="mb-6" >
                <h1 className="text-2xl md:text-3xl font-semibold text-accent">
                    Question will be here.
                </h1>
                <p className="text-sm text-gray-300 mt-2">
                    Asked today
                </p>
            </header >

            {/* <!-- Question Card --> */}
            < section className="bg-darkCard rounded-lg p-6 shadow-md" >
                
                <p className="leading-relaxed">
                    Here is the description of the question.
                </p>

                {/* <!-- Tags --> */}
                <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-sm bg-dark px-3 py-1 rounded text-accent">tag-1</span>
                    <span className="text-sm bg-dark px-3 py-1 rounded text-accent">tag-2</span>
                    <span className="text-sm bg-dark px-3 py-1 rounded text-accent">tag-3</span>
                </div>
            </section >
        </>
    )
}

export default QuestionCardInPage