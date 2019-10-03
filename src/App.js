import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Button from "./components/button";
import Paper from "./components/paper";
import PostData from "../src/data/post.json";

class App extends Component {
  state = {
    PostData,
    currentScore: 0
  };

  handleClick = () => {
    alert("click");
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Button
          key={PostData.id}
          id={PostData.id}
          handleClick={this.handleClick}
        />
        <button onClick={this.handleClick}>Click Me</button>
      </React.Fragment>
    );
  }
}

export default App;
