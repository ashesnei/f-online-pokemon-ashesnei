import React from 'react';
import PokeCard from './PokeCard';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
          <ul className="pokeList">
            {
                this.props.pokemonList.sort((a, b) => a.id - b.id)
                .filter(item => {
                  return item.name.toLowerCase().includes(this.props.filter.toLowerCase()); 
                    })
                  .map(pokemon => {
                  return (
                    <PokeCard pokemon={pokemon} pokemonList={this.props.pokemonList}/>
                    
                  )
                })
            }
          </ul>
      </div>
    )
  }
}

export default Pokedex;