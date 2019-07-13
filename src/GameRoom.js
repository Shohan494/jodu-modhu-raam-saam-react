import React, { Component} from "react";
import ReactDOM from 'react-dom';
import { Client } from 'boardgame.io/react';
import JMRS  from "./game";
import Board from "./Board";

const JMRSClient = Client({
	game: JMRS,
	board: Board,
	debug: true,
	multiplayer: { server: "localhost:8000" }
  });


class GameRoom extends Component{
	constructor(props){
		super(props);
		this.state = { playerID: null };
	}

	render(){
			console.log(this.props);
			const { gameID, playerID, playerCredentials } = this.props.location.state;
		return(
			<div>
				<h1>Game is On {playerCredentials}</h1>
				
				<JMRSClient gameID={gameID} playerID={playerID}/>
			</div>
		);
		

	}
}

export default GameRoom;