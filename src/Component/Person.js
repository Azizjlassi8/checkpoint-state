import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
		console.log("component init");
		super(props);
		this.person = { fullName:"aziz",
    bio:"Student",
profession:"Full stack JS",
imgSrc:'https://thumbs.dreamstime.com/z/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg'};

this.state={count:0}
	}
    componentDidMount(){
        setInterval(()=>{
            this.setState(prevState=>({
                count:prevState.count+1
            }))
        },1000)
    }
componentWillUnmount(){
    clearInterval(this.state)
}
  render() {
    return (
      <div>
        <div>counter:{this.state.count}
        </div>
        <h2>{this.person.fullName}</h2>
        <h2>{this.person.bio}</h2>
        <h2>{this.person.profession}</h2>
        <img src={this.person.imgSrc}alt='myphoto' style={{width:'400px'}}/>
        
      </div>
    )
  }
}
