import React, { Component} from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';
import Room from './Room'

class Lobby extends Component{

  constructor(props) {

  super(props);
	this.state = { roomList: [], joinStatus: false };

}

  checkJoinStatus()
  {
    let username = this.props.username;

    this.state.roomList.forEach( room => {
        room.players.forEach( player => {
          if(username === player.name )
          {
            console.log("match found, you are joined");
            this.setState({joinStatus: true});
            
            this.props.changeJoinStatus(true);
            return;
          }

        })
      } );

  }

  createRoom(){

    axios.post(`http://localhost:8000/games/chess/create`, 
    {
      numPlayers : 2
    })
      .then(res => {
        console.log(res);
        console.log(res.data);

        this.getRoomsList();
      });



  }

  getRoomsList(){

    console.log("works");
    axios.get(`http://localhost:8000/games/chess`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ roomList: res.data.rooms });
      })
  }

  componentDidMount(){
    this.getRoomsList();
  }

  joinRoom(gameId)
  {
    console.log(gameId);
/*
    axios.post(`http://localhost:8000/games/chess/${gameId}/join`,
    {
      playerName : this.props.username,
      playerID : 0,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
*/


    const data = 
        {
          playerName : this.props.username,
          playerID : 0,
        };

    const url = `http://localhost:8000/games/chess/${gameId}/join`;

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url,
    };

    axios(options).then(res => {
            console.log(res);
            console.log(res.data);
          });


  }





 render()
 {

    let renderRooms = this.state.roomList.map( (room) => <Room key={room.gameID} room={room}/> );
    // let renderRooms = this.state.list.map( (room, key) => <a href="#" onClick={this.joinRoom.bind(this, room.gameID)} key={room.id}>  {room.gameID} #### -- ####</a> );

    return(
      <div>
        <h1>Lobby</h1>
          <h2>User: {this.props.username}</h2>
  

      <button onClick={ this.createRoom.bind(this) }>Create New Room</button> 
      <div>
        
        <p>list of rooms</p>
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