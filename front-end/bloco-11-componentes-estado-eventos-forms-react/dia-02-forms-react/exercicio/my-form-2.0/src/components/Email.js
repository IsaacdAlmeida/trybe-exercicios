import { Component } from "react";

class Email extends Component {
  render() {

    const { email, onChangeHAndler } = this.props;

    return (
      <div>
        Email:
        <input 
          type='text'
          name='email'
          onChange={onChangeHAndler} 
          value={ email }
        />
      </div>
    )
  }
}

export default Email;