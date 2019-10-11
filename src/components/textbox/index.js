import React, { Component } from "react";
import "./index.scss";

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="textbox">
        <div className="textbox__content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.para}</p>
        </div>
      </div>
    );
  }
}

export default TextBox;
