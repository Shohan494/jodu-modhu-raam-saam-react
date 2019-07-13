import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

    passCard(){
        this.props.moves.passCard( 0 );
        //this.props.events.endTurn();
        //console.log(reply);
    }

    render() {
        return(
            <div>
                
                <div>
                    <button onClick={this.passCard.bind(this)}>Pass Card</button>
                </div>
                
                <div>

                </div>
                
                <div>

                </div>
                
                <div>

                </div>

            </div>
        );


    }


}


export default Board;