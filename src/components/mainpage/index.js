import React, { Component } from "react";
import { Row, Col, Button, Modal } from "antd";
import "antd/dist/antd.css";
import NavBar from "../navbar";
import MianScreen from "../mainscreen";
import OurStory from "../ourstory";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <MianScreen />
        <OurStory />
      </div>
    );
  }
}

export default MainPage;
