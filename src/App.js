import React, { Component } from 'react';
import './App.css';
// import Pokemon from "./components/Pokemon";

const apiPoke = 'https://pokeapi.co/api/v2/pokemon/';
const countPokemons = 5;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonList: [],
      pokemon: null
    }
  }
  componentDidMount() {
    this.fetching()
  }
  
  fetching(){
    fetch(apiPoke)
    .then(response => response.json())

    .then(data => {
      let list = data.results;
      this.saveList(list);
    })
  }

  saveList(pokemons){
    let pokeList = [];
    
    for(let i=0; i<countPokemons; i++){
      fetch(pokemons[i].url)
      .then (response => {
        return response.json();
      })
      .then (data => {
        pokeList.push(data);
      })
    }
    this.setState({pokemonList: pokeList})
  }
      

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="appName">Tu Pokedex</h1>
        </header>
        <main>
        <input type="text"/>
        <ul className="pokeList">
          {
            this.state.pokemonList.map(pokemon => {
              return (
                <li className="card">
                  <div className="cardContainer">
                    <div className="cardContailer__ImageContainer">
                      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                      <span className="pokemonOrder">{pokemon.order}/{countPokemons}</span>
                    </div>
                    <div className="cardContailer__dataContainer">
                      <div className="cardContailer__dataContainer--type">

                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        </main>
      </div>
    );
  }
}

export default App;
