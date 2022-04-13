import React, { Component } from 'react'

class TextArea extends Component {
  render(){

    const { value, handleChange } = this.props
    let error = undefined

    if(value.length > 50)
      error = 'limite de 50 caracteres'

    return (
      <label>
          <textarea 
          name='textArea'
          value={value}
          onChange={handleChange} 
        />
        <p>{error !== undefined ? error : ''}</p>
      </label>
    )
  }
}

export default TextArea;