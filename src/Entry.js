import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Entry extends Component {
	constructor(props) {
		super(props);
		this.state = { playerName: '' };
	}

	handleChange(event) {
		this.setState({ playerName: event.target.value });
	}

	onSubmit() {
		console.log(this.state.playerName);
		// this.props.logIn(this.state.playerName);
		this.props.history.push({
			pathname: '/lobby',
			state: {
				username: this.state.playerName
			}
		});
	}

	render() {
		//console.log(this.props);
		return (
			<div>
				<h1> Enter Into Game</h1>
				<h2>LOGIN</h2>

				<input
					type="text"
					name="playerName"
					value={this.state.playerName}
					onChange={this.handleChange.bind(this)}
				/>

				<button onClick={this.onSubmit.bind(this)}>Submit</button>
			</div>
		);
	}
}

export default Entry;
