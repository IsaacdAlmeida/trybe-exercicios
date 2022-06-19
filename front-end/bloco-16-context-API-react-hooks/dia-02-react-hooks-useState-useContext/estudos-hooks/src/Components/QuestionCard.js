import React, {useState} from 'react'

function QuestionCard({ questions }) {

  const [likes, setLikes] = useState(0)

  return(
    <div>
      <header>
        {questions.name}
      </header>
      <p>
        {questions.question}
      </p>
      <div>
        <button 
          type="button" 
          onClick={() => setLikes(prevLikes => prevLikes + 1)}
        >
          {`${likes} Likes`}  
        </button>
      </div>
    </div>
  )
}

export default QuestionCard