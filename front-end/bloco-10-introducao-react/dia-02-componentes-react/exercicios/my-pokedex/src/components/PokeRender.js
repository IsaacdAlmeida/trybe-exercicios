import React, { Component } from "react";

// nesse caso o this.props vai funcionar, já que agora eu recebo o dado direto do componente pokedex
// this.props.essenome tem que ser o nome que passo no pokedex, no caso o render lá

class PokeRender extends Component {
  render(){
    
    const { name, type, averageWeight, image } = this.props.pokemon
    
    return (
      <div>
        <h3>{ name }</h3>
        <p>{ type }</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={ image } alt={ name }></img>
      </div>
    )
  }
}

export default PokeRender;