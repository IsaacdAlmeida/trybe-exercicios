import React, { Component } from 'react'

class NewQuestionPage extends Component {
  render() {
    return (
      <div>
        <form>
        <label htmlFor="question">
          Digite sua pergunta:
          <textarea 
            name="question"
            palceholder="Escreva sua pergunta"
            id="question"
            cols="20"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite seu nome:
          <input 
            type="text"
            name="name"
            placeholder="Escreva seu nome"
            id="user"
          />
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
      </div>
    )
  }
}

export default NewQuestionPage