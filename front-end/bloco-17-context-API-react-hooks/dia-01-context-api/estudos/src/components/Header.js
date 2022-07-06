import React, { Component } from 'react'
import TesteContext from '../context/TesteContext'

class Header extends Component {
  render() {
    return (
      <TesteContext.Consumer>
        {({ nome }) => (
          <div>
            <h2>{ `Olá ${nome}, bem vindo a aplicação de teste` }</h2>
          </div>
        )}
      </TesteContext.Consumer>
    )
  }
}

export default Header;


// o Consumer deve ser passado como função: render props
// Dessa forma, o primeiro argumento da callback é o contexto e o retorno deve ser o que vai ser renderizado
// Podemos desestruturar o context, chamando somente o que queremos