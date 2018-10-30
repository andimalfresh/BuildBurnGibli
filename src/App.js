import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then(responce => responce.json())
      .then(responce => {
        this.setState({
          data: responce
        });
      });
  }

  render() {
    return (
      <div className="App">
        <CharacterCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
