import React, { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import QuestionContext from '../context/QuestionsContext'

function NewQuestionPage({ history }) {
 
    const [question, setQuestion] = useState('')
    const [name, setName] = useState('')

    const {createQuestion} = useContext(QuestionContext)

    const handleSubmit = (event) => {
      event.preventDefault()
      const newQuestion = {
        id: nanoid(),
        name,
        question,
        claps: 0,
      };
      createQuestion(newQuestion);
      history.push("/");
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          Digite sua pergunta:
          <textarea 
            name="question"
            palceholder="Escreva sua pergunta"
            id="question"
            cols="20"
            rows="10"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </label>
        <label htmlFor="user">
          Digite seu nome:
          <input 
            type="text"
            name="name"
            placeholder="Escreva seu nome"
            id="user"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
      </div>
    )
}

export default NewQuestionPage;
