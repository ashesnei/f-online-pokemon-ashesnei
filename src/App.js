import React, { Component } from 'react';
import './App.css';

const apiPoke = "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonList: []
    }
    this.fetching();
  }

  fetching(){
    fetch(apiPoke)
    .then(response => response.json())
    .then(data => {
      let results = data.results
      this.setState({ pokemonList: results})
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="appName">Tu Pokedex</h1>
        </header>
        <input type="text"/>
        <ul className="pokeList">
          {this.state.pokemonList.map(item => {
            return (
              <li className="itemPokemon" key={item.index}>
                <div>
                  <h2>{item.name}</h2>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
