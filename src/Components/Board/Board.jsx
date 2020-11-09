import React, { Component } from "react";
import { connect } from "react-redux";
import { checkTile } from "../../Store/Board/actions";
import "./Board.css";

import Tiles from "../Tiles/Tiles";

class Board extends Component {
  renderTiles(item, index) {
    return (
      <Tiles
        key={index}
        data={item}
        onClick={(event) => {
          this.props.checkTile(item);
        }}
      />
    );
  }

  render() {
    return (
      <div className="view-board">
        {this.props.tiles &&
          this.props.tiles.map((item, index) => this.renderTiles(item, index))}
      </div>
    );
  }
}

export default connect(null, { checkTile })(Board);
