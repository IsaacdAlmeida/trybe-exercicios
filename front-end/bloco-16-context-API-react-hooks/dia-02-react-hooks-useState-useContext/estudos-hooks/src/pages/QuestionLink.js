import React, { Component } from 'react'
import QuestionCard from '../Components/QuestionCard';

class QuestionLink extends Component {
  
  handleClickNextPage = () => {
    const { history } = this.props;
    history.push("/new-question")
  }

  render() {
    const questions = [
      {
        id: 0,
        name: "Isaac Almeida",
        question: "Quanto é 2+2?",
        likes: 5,
      },
    ];

    return(
      <div>
        {questions.map((item, index) => (
          <QuestionCard key={index} questions={item} />
        ))}
        <button type="button" onClick={this.handleClickNextPage}>
          Nova Pergunta
        </button>
      </div>
    )
  }
}

export default QuestionLink