import React, { Component } from "react";
import data from '../data';
import PokeRender from "./PokeRender";

// desestrutura o component e importa os dados do data.js
// aqui recebemos o data.js e fazemos a renderização do componente pokerender

class Pokedex extends Component {

  render () {
    
    return (
      <div>
        {/* <PokeRender pokemon={data[0]}/> */}

        {data.map((item) => {
          return (
            <PokeRender pokemon={item} key={ item.id } />
          )
        })}
      </div>
    )
  }
}

// na linha 14 eu to passando informações para o PokeRender, nesse caso seria os dados importados do data.js
// passei a key também como sendo o id de cada pokemon, dessa forma o id é único e a key tbm
export default Pokedex;