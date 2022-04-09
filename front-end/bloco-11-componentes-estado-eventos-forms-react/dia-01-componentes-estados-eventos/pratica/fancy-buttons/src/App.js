import React from "react";


class App extends React.Component {
  
  constructor() {
    super()
    this.handleclickButtonOne = this.handleclickButtonOne.bind(this)
    this.handleclickButtonTwo = this.handleclickButtonTwo.bind(this)
    this.handleclickButtonThree = this.handleclickButtonThree.bind(this)
    this.state = {
      clickButtonOne: 0,
      clickButtonTwo: 0,
      clickButtonThree: 0
    }
  }

  handleclickButtonOne() {
    this.setState(
      (previousState, _props) => ({
        clickButtonOne: previousState.clickButtonOne + 1
      })
    )
  }

  handleclickButtonTwo() {
    this.setState(
      (previousState, _props) => ({
        clickButtonTwo: previousState.clickButtonTwo + 1
      })
    )
  }

  handleclickButtonThree() {
    this.setState(
      (previousState, _props) => ({
        clickButtonThree: previousState.clickButtonThree + 1
      })
    )
  }

  collorButton(button) {
    return button % 2 === 0 ? 'red' : 'green'
  }
  
  render() {

    const { clickButtonOne, clickButtonTwo, clickButtonThree } = this.state
    
    return (
      <div>
        <button onClick={this.handleclickButtonOne} style={{backgroundColor: this.collorButton(clickButtonOne)}}> esse botão foi clicado: {clickButtonOne} </button>
        <button onClick={this.handleclickButtonTwo}> esse botão foi clicado: {clickButtonTwo} </button>
        <button onClick={this.handleclickButtonThree}> esse botão foi clicado: {clickButtonThree} </button>
      </div>
    )
  }
} 

export default App;

// Posso chamar a função handleClick dentro da classe
// para fazer referência a função, no evento do botão, é necessário usar o this para referenciar que é a função dentro da classe


/* constructor() {
  super()
  this.state = {
    Cliques: 0
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState((anterior, _props) => ({
    Cliques: anterior.Cliques + 1
  }))
}

render() {
  return (
    <div>
      <button onClick={this.handleClick}>{this.state.Cliques}</button>
      <button onClick={this.handleClick}>Botão</button>
      <button onClick={this.handleClick}>Botão 03</button>
    </div>
  )
} */