import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Entry from './Entry';
import Lobby from './Lobby';
import GameRoom from './GameRoom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { browserHistory } from 'react-router';

class App extends Component {

	constructor() {
		super();
		this.state = { loggedIn: false, username: '', joinStatus: false, redirect: true };

	}

	//DUE TO USING ROUTE, UNNECCESARY

	// logIn(username) {
	// 	//this.setState({ loggedIn: true, username : username});
	// 	console.log('I am loggin in');

	// }

	changeJoinStatus(status) {
		this.setState({ joinStatus: status });
	}


	render() {

		// if (this.state.loggedIn) {
		// 	console.log("Logged in");

		// 	if (this.state.joinStatus) {
		// 		alert("You are already joined");
		// 		return <Game />;
		// 	}
		// 	else {
		// 		return <Lobby username={this.state.username} changeJoinStatus={this.changeJoinStatus.bind(this)} />;
		// 	}

		// } else {
		// 	console.log("Entry");
		// 	return <Entry logIn={this.logIn.bind(this)} />;
		// }

		return (
			<div>
				<Route path="/" exact component={Entry} />
				<Route path="/lobby" exact component={Lobby} />
				<Route path="/game" exact component={GameRoom} />
			</div>
		);

	}
}


export default App;

