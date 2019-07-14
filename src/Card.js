import React, { Component } from 'react';
import './card.css';
import { CARD_GENERIC_NAMES, CARD_NAMES } from "./Game"

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    move = () => {
        this.props.move(this.props.index);
    }

    render() {
        let genericName;

        switch (this.props.name) {
            case CARD_NAMES.JODU:
                genericName = CARD_GENERIC_NAMES.JODU;
                break;
            case CARD_NAMES.MODHU:
                genericName = CARD_GENERIC_NAMES.MODHU;
                break;
            case CARD_NAMES.RAAM:
                genericName = CARD_GENERIC_NAMES.RAAM;
                break;
            case CARD_NAMES.SHAAM:
                genericName = CARD_GENERIC_NAMES.SHAAM;
                break;
        }

        return (
            <div className="card" onClick={this.move}>
                {genericName}
            </div>
        )
    }
}
