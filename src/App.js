import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

import Nav from './components/Nav';
import Jumbtron from './components/Jumbotron';

class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    message: "Click on any image to begin"
  };


  //fisher shuffle - https://bost.ocks.org/mike/shuffle/
  shuffleCards = () => {
    let newCards = this.state.friends;
    var m = newCards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = newCards[m];
      newCards[m] = newCards[i];
      newCards[i] = t;
    }
    this.setState({ friends: newCards });
  }

  handleClick = (id) => {
    let array = this.state.friends;
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        if (array[i].selected) {
          this.resetGame();
        } else {
          let newScore = this.state.score + 1;
          if (newScore > this.state.highScore) {
            this.setState({ highScore: newScore });
            this.setState({ message: "Nice job, new high score" })
          }
          this.setState({ score: newScore });
          this.setState({ message: "Good memory, keep it going" })
          array[i].selected = true;
        }
      }
    }
    this.setState.friends = ({ friends: array });
    this.shuffleCards();
  }

  resetGame = () => {
    for (var i = 0; i < friends.length; i++) {
      friends[i].selected = false;
    }
    this.setState(
      {
        friends: friends,
        score: 0,
        message: 'Sorry, you already click that flag'
      });
  }

  shuffleFriends = (id) => {
    let newFriends = this.shuffle(this.state.friends, id);
    this.setState({ newFriends });
  };

  render() {
    return (
      <div>
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
        <Jumbtron />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              shuffleFriends={this.shuffleFriends}
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
