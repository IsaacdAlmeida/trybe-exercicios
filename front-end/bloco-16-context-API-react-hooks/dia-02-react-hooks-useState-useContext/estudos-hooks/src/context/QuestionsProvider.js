import QuestionContext from "./QuestionsContext";

function QuestionsProvider({ children }) {

  const questions = [
    {
      id: 0,
      name: "Isaac Almeida",
      question: "Quanto é 2+2?",
      likes: 5,
    },
  ];


  return (
    <QuestionContext.Provider value={{questions}}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionsProvider;

// no provider do componente temos que passar o children desestruturarando a props
// envolvendo o children deve vir o provider de acordo com o context criado

// estou passando para meu contexto um objeto que tem uma chave questions e esse questions
// é um array de objetos