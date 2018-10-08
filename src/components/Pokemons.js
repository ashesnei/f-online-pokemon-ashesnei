import React from 'react';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {
          <ul className="pokeList">
            {
                this.props.pokemonList.sort((a, b) => a.id - b.id)
                .filter(item => {
                  return item.name.toLowerCase().includes(this.props.filter.toLowerCase()); 
                    })
                  .map(pokemon => {
                  return (
                    <li>
                      <div className="pokemonCard">
                        <div className="pokemonCard__graphic--container">
                          <div className="pokemonCard__graphic--container-img">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemonCard__img" />
                          </div>
                            <span className="pokemonCard__graphic--container-order"><p className="order-p">ID {pokemon.id}/{this.props.pokemonList.length}</p></span>
                        </div>
                        <div className="pokemonCard__info--container">
                          <h2 className="pokemonCard__info--name">{pokemon.name}</h2>
                          <div className="pokemonCard__info--type-container">
                            {
                              pokemon.types.map(types => {
                                return (
                                  <span className="pokemonCard__info--type"><p className="type-name">{types.type.name}</p></span>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })
            }
          </ul>
        }
      </div>
    )
  }
}

export default Pokedex;