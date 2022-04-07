import React from "react";


class App extends React.Component {
  handleClick() {
    console.log('botão clicado');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Botão 01</button>
        <button onClick={this.handleClick}>Botão 02</button>
        <button onClick={this.handleClick}>Botão 03</button>
      </div>
    )
  }
}

export default App;
