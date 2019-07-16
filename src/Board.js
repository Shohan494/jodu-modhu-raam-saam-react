import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import './board.css';

class Board extends Component {
	static propTypes = {
		G: PropTypes.any.isRequired,
		ctx: PropTypes.any.isRequired,
		moves: PropTypes.any.isRequired,
		playerID: PropTypes.string,
		isActive: PropTypes.bool,
		isMultiplayer: PropTypes.bool
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	renderCard = (playerID) => {
		return this.props.G.playersCards[playerID].map((card, index) => (
			<Card key={card.id} name={card.name} move={this.props.moves.passCard} index={index} />
		));
	};

	//for display position
	//current player will sit bottom
	getPlayerByPosition(position) {
		let playerID = Number(this.props.playerID);

		return playerID + position <= 3 ? (playerID + position).toString() : '0';
	}

	render() {
		// console.log(this.props);

		return (
			<div className={'board-container column'}>
				<div className="card-container row">{this.renderCard(this.getPlayerByPosition(2))}</div>
				<div className="board-container row">
					<div className="card-container column">{this.renderCard(this.getPlayerByPosition(3))}</div>
					<div className="card-container column">{this.renderCard(this.getPlayerByPosition(1))}</div>
				</div>
				<div className="card-container row">{this.renderCard(this.getPlayerByPosition(0))}</div>
			</div>
		);
	}
}

export default Board;
