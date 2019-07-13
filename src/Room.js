import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';

class Room extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	joinRoom(gameId) {

		const data =
		{
			playerName: this.props.username,
			playerID: 0,
		};

		const url = `http://localhost:8000/games/chess/${gameId}/join`;

		const options = {
			method: 'POST',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			data: qs.stringify(data),
			url,
		};

		axios(options).then(res => {
			console.log(res.data);
			if (res.data.playerCredentials) {

				this.props.history.push({
					pathname: "/game",
					state: {
						playerCredentials: res.data.playerCredentials
					}
				});
			}
		});
	}

	renderSeat() {
		return this.props.room.players.map((player) => {
			if (player.name) return <p key={player.id}>[{player.name}]</p>;
			return <p key={player.id}>FREE</p>
		}
		);
	}

	render() {
		console.log(this.props);
		const { gameID } = this.props.room;

		return (
			<div>
				<table border="3px stripe red">
					<tr>
						<th>Room ID: {gameID}</th>
					</tr>
					<tr>
						<td>{this.renderSeat()}</td>
					</tr>
					<tr>
						<td><center><button onClick={this.joinRoom.bind(this, gameID)}>Join Room</button></center></td>
					</tr>
				</table>
			</div>

		);

	}

}

export default Room;