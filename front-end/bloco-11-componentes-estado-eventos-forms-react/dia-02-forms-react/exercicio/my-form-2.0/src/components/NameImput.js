import { Component } from "react";

class NameImput extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    }
  }

  onChangeHAndler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  };

  render() {

    const { name } = this.state;

    return (
      <div>
        Nome:
        <input 
          type='text'
          name='name'
          onChange={this.onChangeHAndler} 
          value={ name }
        />
        <p>
          Nome: {name}
        </p>
      </div>
    )
  }
}

export default NameImput;

// componente controlado
// nesse passo eu estoud desestruturando o target na função para criar um handler genérico
// eu passo como 'parâmetro' dessa função que o estado será igual ao [name]: value.
// assim eu só preciso passar pro form a função, o name= com o nome (nome da chave) e o value do objeto  