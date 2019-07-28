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
  shuffle = (array, id) => {
    for (var j = 0; j < array.length; j++) {
      if (array[j].id === id) {
        console.log(array[j].name)
        if (array[j].selected) {
          console.clear();
          this.setState({ score: 0 });
          this.setState({ message: "Try again.." });
          friends.forEach(friend => (friend.clicked = false));
        } else {
          console.log(this.state.score);
          array[j].selected = true;
          let newScore = this.state.score + 1;
          this.setState({ score: newScore });
          this.setState({ message: "Keep going" });
        }
      }
    }
    console.log(this.state.status, this.state.score);
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

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
    console.log('click', id, this.state.score);
    let array = this.state.friends;
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        if (array[i].selected) {
          console.log("Already selected");
          this.resetGame();
        } else {
          let newScore = this.state.score + 1;
          this.setState({ score: newScore });
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
        message: 'Click any image to start game'
      });
  }

  shuffleFriends = (id) => {
    let newFriends = this.shuffle(this.state.friends, id);
    this.setState({ newFriends });
  };

  render() {
    return (
      <div>
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.highScore}/>
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
