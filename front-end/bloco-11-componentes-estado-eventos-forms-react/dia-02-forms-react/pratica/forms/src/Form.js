import React, { Component } from 'react'
import './Form.css'
import SelectForm from './SelectForm'
import TextArea from './TextArea'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      turma: '',
      nota: 0,
      checkboxComparer: false,
      textArea: '',
    }
  }

  handleChange = ({ target }) => {
   const { name } = target;
   const value = target.type === 'checkbox' ? target.checked : target.value

   this.setState({
     [name]: value,
   })
  }

  render() {

    const { turma, nota, checkboxComparer, textArea } = this.state

    return (
      <div className='form-container'>
        <h4>Prática</h4>
        <form>

          <SelectForm value={turma} handleChange={this.handleChange}/>

          <input
            name="nota"
            type="number"
            value={nota}
            onChange={this.handleChange}
          />

          <input 
            name="checkboxComparer"
            type="checkbox"
            value={checkboxComparer}
            onChange={this.handleChange}
          />

          <TextArea value={textArea} handleChange={this.handleChange}/>

          <input type='file' />

        </form>
      </div>
    )
  }
}

export default Form;

// event handler genérico
// target.name eu pego o nome/chave do objeto
// target.value eu pego o valor do objeto