import React from 'react'

function QuestionCard({ questions }) {
  return(
    <div>
      <header>
        {questions.name}
      </header>
      <p>
        {questions.question}
      </p>
    </div>
  )
}

export default QuestionCard