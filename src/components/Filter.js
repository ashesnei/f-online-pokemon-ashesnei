import React from 'react';

class Filter extends React.Component {
render(){
return (
    <input type="text" onChange={this.props.filterFunction}/>
 );
 }
}

export default Filter;