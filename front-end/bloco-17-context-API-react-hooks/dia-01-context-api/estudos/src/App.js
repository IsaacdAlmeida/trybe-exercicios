import React from "react";
import TesteContext from "./context/TesteContext"; //Necessário envelopar a aplicação dentro do contexto
import Header from "./components/Header";
import Infos from "./components/Infos";

class App extends React.Component {

  
  render() {
    const INITIAL_STATE = {
      nome: 'Isaac',
      peso: 10,
      altura: 0,
    }
  
    return (
      <TesteContext.Provider value={ INITIAL_STATE }>
        <div>
          <Header />
          <Infos />
        </div>
      </TesteContext.Provider>
    );    
  }

}

export default App;
