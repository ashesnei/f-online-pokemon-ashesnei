import React from 'react';

class Filter extends React.Component {
render(){
return (
    <input className="input"  type="text" onChange={this.props.filterFunction} value={this.props.filter} placeholder="Filtra pokemons por nombre..."/>
 );
 }
}

export default Filter;