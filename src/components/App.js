import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Afrax",
        score: 0,
        id: 1
      },
      {
        name: "Moe",
        score: 0,
        id: 2
      },
      {
        name: "Jafar",
        score: 0,
        id: 3
      },
      {
        name: "Faay",
        score: 0,
        id: 4
      }
    ]
  };

  //player id counter
  prevPlayerId = 4;

    handleScoreChange = (index,delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    handleAddPlayer = (name) => {

        this.setState( prevState => {
            return {
                players: [
                    //compine the array players object in state
                    //this merges the existing objects in the original with the new array created
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1,
                    }
                ]
            }
        });
    }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
