import React from 'react';

class PokeCard extends React.Component {
  render() {
    return (
      <li>
        <div className="pokemonCard">
          <div className="pokemonCard__graphic--container">
            <div className="pokemonCard__graphic--container-img">
              <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name} className="pokemonCard__img" />
            </div>
            <span className="pokemonCard__graphic--container-order"><p className="order-p">ID {this.props.pokemon.id}/{this.props.pokemonList.length}</p></span>
          </div>
          <div className="pokemonCard__info--container">
            <h2 className="pokemonCard__info--name">{this.props.pokemon.name}</h2>
            <div className="pokemonCard__info--type-container">
              {
                this.props.pokemon.types.map(types => {
                  return (
                    <span className="pokemonCard__info--type"><p className="type-name">{types.type.name}</p></span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default PokeCard;