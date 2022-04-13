import React, { Component } from 'react'

class SelectForm extends Component {
  render(){

    const { value, handleChange } = this.props

    return (
      <select 
      name='turma' 
      value={value} 
      onChange={handleChange}
      >
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
      </select>
    )
  }
}

export default SelectForm;