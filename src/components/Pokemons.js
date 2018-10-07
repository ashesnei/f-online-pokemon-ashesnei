import React from 'react';

class Pokedex extends React.Component {
    render() {
        return (
            <div>
                {
                    <ul>
                        <li>
                            {
                                this.props.pokemonList.length < 1 ?
                                    <h1>No data</h1>
                                    :
                                    this.props.pokemonList.map(pokemon => {
                                        return <h2>{pokemon.name}</h2>
                                    })
                            }
                        </li>
                    </ul>
                }
            </div>
        )
    }
}

export default Pokedex;