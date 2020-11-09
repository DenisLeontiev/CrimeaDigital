import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";

import Board from "./Components/Board/Board.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={"view-container" + (this.props.finish && " is-finish")}>
          <h1>Finish</h1>
          <Board tiles={this.props.board} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board.board,
    finish: state.board.finish
  };
}

export default connect(mapStateToProps)(App);
