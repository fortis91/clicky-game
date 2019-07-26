import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends
  };

  
  //fisher shuffle - https://bost.ocks.org/mike/shuffle/
  shuffle = (array, id) => {
    for (var j = 0; j < array.length; j++) {
      if (array[j].id === id) {
        console.log(array[j].name)
        if (array[j].selected) {
          console.clear()
          console.log('Lost');
        } else {
          array[j].selected = true;
        }
      }
    }
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  shuffleFriends = (id) => {
    let newFriends = this.shuffle(this.state.friends, id);

    this.setState({ newFriends });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
