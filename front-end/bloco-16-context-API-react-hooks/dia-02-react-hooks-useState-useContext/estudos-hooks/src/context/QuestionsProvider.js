import QuestionContext from "./QuestionsContext";
import { useState } from "react";

function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      name: "Isaac Almeida",
      question: "Quanto é 2+2?",
      likes: 5,
    },
  ]);

  function createQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  };

  return (
    <QuestionContext.Provider value={{ questions, createQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionsProvider;

// no provider do componente temos que passar o children desestruturarando a props
// envolvendo o children deve vir o provider de acordo com o context criado

// estou passando para meu contexto um objeto que tem uma chave questions e esse questions
// é um array de objetos

// para trabalhar com estado dentro de função usamos o useState()
// dentro do useState(temos o estado inicial)
// retorna um array (sempre vai ser igual)
// duas chaves [0, 1]
// chave 0 estado e chave 1 função para alterar o estado
// ex. const [state, setState] = useState([]);
// posso usar quantos states quiser e o estado inicial pode ser qualquer tipo JavaScript

