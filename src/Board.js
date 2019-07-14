import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import "./board.css";

class Board extends Component {

    static propTypes = {
        G: PropTypes.any.isRequired,
        ctx: PropTypes.any.isRequired,
        moves: PropTypes.any.isRequired,
        playerID: PropTypes.string,
        isActive: PropTypes.bool,
        isMultiplayer: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderCard = () => {

        return this.props.G.playersCards[this.props.playerID].map((card, index) =>
            <Card
                key={card.id}
                name={card.name}
                move={this.props.moves.passCard}
                index={index}
            />
        );
    }

    render() {
        console.log(this.props);
        return (
            <div className="board-container">
                <div className="card-container">
                    {this.renderCard()}
                </div>
            </div>
        );


    }


}


export default Board;