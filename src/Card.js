import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
    constructor(props){
        super(props);
    }
    
    move = () => {
        this.props.move(this.props.index);
    }

    render() {
        return (
            <div className="card" onClick={this.move}>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
