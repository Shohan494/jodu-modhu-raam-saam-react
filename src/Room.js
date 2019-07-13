import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';

class Room extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.baseUrl = `http://localhost:8000/games/jodu-modhu-raam-shaam`;
	}

	joinRoom(gameId, seatNumber) {

		const data =
		{
			playerName: this.props.username,
			playerID: seatNumber,
		};

		const url = `${this.baseUrl}/${gameId}/join`;

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
						playerCredentials: res.data.playerCredentials,
						gameID: gameId,
						playerID: seatNumber

					}
				});
			}
		});
	}

	renderSeat() {
		const { gameID } = this.props.room;

		return this.props.room.players.map((player) => {
			if (player.name) return <p key={player.id}>[{player.name}]</p>;
			if(this.props.joinStatus){
				return(
					<div>
						<p key={player.id}>Free</p>
					</div>
				);
			} else {
				return(
					<div>
						<a href="#" onClick={this.joinRoom.bind(this, gameID, player.id)}  key={player.id}>Free-Join this Room</a>
						<br />
						<br />
					</div>
				);
			}
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
				</table>
			</div>

		);

	}

}

export default Room;