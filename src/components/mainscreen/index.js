import React, { Component } from "react";
import "./index.scss";
import TextBox from "../textbox";

class MianScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mainscreen">
        <div className="mainscreen__content">
          <TextBox
            heading={`Let's Enjoy The Wonders of Nature`}
            para={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores."
            }
          />
        </div>
      </div>
    );
  }
}

export default MianScreen;
