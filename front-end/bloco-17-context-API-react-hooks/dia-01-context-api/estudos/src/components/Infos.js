import React, { Component } from 'react'
import TesteContext from '../context/TesteContext'

class Infos extends Component {
  render() {
    const { altura, peso } = this.context;
    
    return (
      <div>
        <p>{ altura }</p>     
        <p>{ peso }</p>     
      </div>
    )};
};

Infos.contextType = TesteContext;

export default Infos;

// outra forma de pegar o contexto é definir uma propriedade estática da classe.
// dessa forma eu não preciso retornar uma função 