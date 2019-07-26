import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
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
    // let friends = [...this.state.friends];
    // for (var i = 0; i < friends.length; i++) {
    //   if (friends[i].id === id) {
    //     friends[i].selected = true;
    //   }
    // }
    // let newFriends = this.shuffle(friends);
    let newFriends = this.shuffle(this.state.friends, id);

    // console.clear();

    // for (var friend in newFriends) {
    //   console.log(newFriends[friend]);
    // }
    // if (friends[id].selected) {
    //   console.log(friends[id]);
    //   console.log('already selected');
    // } else {
    //   console.log('new');
    //   friends[id].selected = true;
    // }
    
    // for (var friend in friends) {
    //   if (friends[friend].selected) {
    //     console.log(friends[friend]);
    //   }
    // }
    // console.log(friends[id].name, friends[id].selected);

    this.setState({ newFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
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
