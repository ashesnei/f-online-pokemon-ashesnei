import React from 'react';

class Filter extends React.Component {
render(){
return (
    <React.Fragment>
    {
        this.props.filter==="" ?
        <input className="input"  type="text" onChange={this.props.filterFunction} value="Filtra pokemons por nombre..."/>    
        :
        <input className="input"  type="text" onChange={this.props.filterFunction} value={this.props.filter}/>
    }
    </React.Fragment>
 );
 }
}

export default Filter;