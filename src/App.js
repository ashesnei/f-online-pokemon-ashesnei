import React, { Component } from 'react';
import './App.css';
// import Pokemon from "./components/Pokemon";

const apiPoke = "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonList: [],
      pokemon: null
    }
    this.fetching();
  }

  fetching(){
    let pokeList = [];
    fetch(apiPoke)
    .then(response => response.json())

    .then(data => {
      let list = data.results;
       for(let i=0; i< list.length; i++) {
          fetch(list[i].url)
          .then (response=> response.json())
          .then (data => {
            console.log(data)
             pokeList.push(data)
              })
       }
    this.setState({ pokemonList: pokeList})
  })}

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="appName">Tu Pokedex</h1>
        </header>
        <input type="text"/>
        <ul className="pokeList">
          {/* {this.state.pokemonList.map(item => {
            return (
              <li className="itemPokemon" key={item.index}>
              <div>
                  <h2>Pokemon</h2>
              </div>
          </li>
            )
          })} */}
        </ul>

      </div>
    );
  }
}

export default App;
