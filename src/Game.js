import React, { Component} from "react";
import ReactDOM from 'react-dom';

class Game extends Component{
	constructor(props){
		super(props);
	}

	render(){
			console.log(this.props);
		return(

			<h1>Game is On {this.props.location.state.playerCredentials}</h1>
		);


	}
}

export default Game;