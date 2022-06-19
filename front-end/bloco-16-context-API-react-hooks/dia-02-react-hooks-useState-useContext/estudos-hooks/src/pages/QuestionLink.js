import React, {useContext} from 'react'
import QuestionCard from '../Components/QuestionCard';
import QuestionContext from '../context/QuestionsContext';

function QuestionLink ({history}) {
  // no componente funcional todas as props vem direto como método da função
  // nesse caso o history vem das props desestruturado
  // const handleClickNextPage = () => {
  //   history.push("/new-question")
  // }
  // a função pode ser passada diretamente como callback no onclick

  // const context = useContext(questionsContext) -> retorna o contexto
  // posso desestruturar de dentro do contexto e pegar o que preciso

  const { questions } = useContext(QuestionContext)
  
  return(
    <div>
      {questions.map((item, index) => (
        <QuestionCard key={index} questions={item} />
      ))}
      <button type="button" onClick={() => history.push("/new-question")}>
        Nova Pergunta
      </button>
    </div>
  )
}

export default QuestionLink