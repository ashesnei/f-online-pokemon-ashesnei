import React, { Component } from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
// import Pokedex from './components/Pokedex';

const apiPoke = 'https://pokeapi.co/api/v2/pokemon/';
const countPokemons = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      pokemonSearch: ""
    }
  }

  componentDidMount(){
    this.fetching();
  }

  fetching() {
    fetch(apiPoke)
      .then(response => response.json())

      .then(data => {
        let list = data.results;
        for (let i = 0; i < countPokemons; i++) {
          fetch(list[i].url)
            .then(response => {
              return response.json();
            })
            .then(data => {
              this.setState({pokemonList: [...this.state.pokemonList, data]})
            })
        }
      })
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="appName">Tu Pokedex</h1>
        </header>
        <main>
          <input type="text" />
          <Pokemons pokemonList={this.state.pokemonList}/>
          {/* <ul>
            <li>
              {
               this.state.pokemonList.length < 1 ?
               <h1>No data</h1>
               :
               this.state.pokemonList.map( pokemon => {
                 return <h2>{pokemon.name}</h2>
               })
                }
            </li>
          </ul> */}
          <p>Prueba</p>
        </main>
      </div>
    );
  }
}

export default App;
