import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';
import Room from './Room'

class Lobby extends Component {

  constructor(props) {

    super(props);
    this.state = { roomList: [], joinStatus: false, username: props.location.state.username };
    //console.log(this.state);

  }



  createRoom() {

    axios.post(`http://localhost:8000/games/chess/create`,
      {
        numPlayers: 2
      })
      .then(res => {
        console.log(res);
        console.log(res.data);

        this.getRoomsList();
      });



  }

  getRoomsList() {
    console.log("works");
    axios.get(`http://localhost:8000/games/chess`)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        this.setState({ roomList: res.data.rooms });
        this.checkJoinStatus();
      })
  }

  checkJoinStatus() {
    let username = this.state.username;
    this.state.roomList.forEach(room => {
      room.players.forEach(player => {
        if (username === player.name) {
          console.log("match found, you are joined");
          this.setState({ joinStatus: true });
          return;
        }

      })
    });

  }

  componentDidMount() {
    console.log("Did mount");
    this.getRoomsList();
  }

  render() {

    let username = this.state.username;
    let renderRooms = this.state.roomList.map((room) => 
      <Room 
        key={room.gameID}
        history={this.props.history}
        location={this.props.location}
        room={room}
        username={username}
      />);
 
    return (
      <div>
        <h1>Lobby</h1>
        <h2>User: {username}</h2>

        <button onClick={this.createRoom.bind(this)}>Create New Room</button>

        <div>

          <p>List of rooms</p>
          <ul>
            {renderRooms}
          </ul>


        </div>

      </div>

    );


  }

}





export default Lobby;


// 166 39 71