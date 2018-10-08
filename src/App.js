import React, { Component } from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import Filter from './components/Filter';

const apiPoke = 'https://pokeapi.co/api/v2/pokemon/';
const countPokemons = 25;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      pokemonSearch: ""
    }
    this.filterFunction = this.filterFunction.bind(this);
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

  filterFunction(e) {
    const value = e.currentTarget.value;
    this.setState({pokemonSearch: value })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="appName">Tu Pokedex</h1>
        </header>
        <main>
          <Filter filterFunction={this.filterFunction}/>
          <Pokemons pokemonList={this.state.pokemonList} filter={this.state.pokemonSearch}/>
        </main>
      </div>
    );
  }
}

export default App;
