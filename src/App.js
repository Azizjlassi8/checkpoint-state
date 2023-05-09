import React, { Component } from 'react'
import Person from './Component/Person'

export default class App extends Component {
  constructor(props) {
		console.log("component init");
		super(props);
		this.state = { show:false };
	}
  handleclick=()=>{this.setState({show:!this.state.show})}
  
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>toggle</button>
        {this.state.show?<Person/>:null}
        
      </div>
    )
  }
}
