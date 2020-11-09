import React, { Component } from "react";
import "./Tiles.css";

export default class Tiles extends Component {
  render() {
    let className = "view-tiles";
    if (this.props.data.open || this.props.data.complete) {
      className += " is-active";
    }
    if (this.props.data.complete) {
      className += " is-complete";
    }

    return (
      <button
        className={className}
        onClick={
          !this.props.data.complete || !this.props.data.open
            ? this.props.onClick
            : undefined
        }
      >
        <span style={{ backgroundColor: this.props.data.color }} />
      </button>
    );
  }
}
