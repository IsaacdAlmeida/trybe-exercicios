import { Component } from "react";
import NameImput from "./NameImput";
import Email from "./Email";
import Birth from "./Birth";
import MomName from "./MomName";

class Form extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      mother:'',
    }

  }

  onChangeHAndler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value, }, () => {

      const { name, email } = this.state;
      const valorMaximo = 40;

      const errorCase = [
        name.length < valorMaximo,
        name.length !== 0,
        email.length < valorMaximo,
        email.length !== 0,
      ];

      const isDisable = errorCase.every((itens) => itens === true );

      this.setState({ isSaveButtonDisabled: !isDisable })

      console.log(errorCase);

    })
  };


  render() {

    const { name, email, mother } = this.state

    return (
      <div>
        Nome: { name }
        <NameImput 
          value={ name }
          onChangeHAndler = {this.onChangeHAndler}
        />
        Email: {email}
        <Email
          value={ email }
          onChangeHAndler = {this.onChangeHAndler}
        />
        Nome da mãe: {mother}
        <MomName 
          value={mother}
          onChangeHAndler = {this.onChangeHAndler}
        />
        <Birth />
      </div>
    )
  }
}

export default Form;