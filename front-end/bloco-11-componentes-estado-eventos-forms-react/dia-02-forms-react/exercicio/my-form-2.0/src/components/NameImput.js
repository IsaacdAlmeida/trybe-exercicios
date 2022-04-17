import { Component } from "react";

class NameImput extends Component {
  render() {

    const { name, onChangeHAndler } = this.props;

    return (
      <div>
        Nome:
        <input 
          type='text'
          name='name'
          onChange={onChangeHAndler} 
          value={ name }
        />
      </div>
    )
  }
}

export default NameImput;

// componente controlado
// nesse passo eu estoud desestruturando o target na função para criar um handler genérico
// eu passo como 'parâmetro' dessa função que o estado será igual ao [name]: value.
// assim eu só preciso passar pro form a função, o name= com o nome (nome da chave) e o value do objeto  