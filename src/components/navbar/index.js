import React, { Component } from "react";
import { Row, Col, Button, Modal } from "antd";
import "antd/dist/antd.css";
import "./index.scss";
import MainScreen from "../mainscreen";
import SignUp from "../singup";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  signUp = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    return (
      <div className="navbar">
        <Row gutter={24} style={{ margin: 0 }}>
          <Col span={8}>
            <img src="https://colorlib.com/preview/theme/trips/images/logo.png"></img>
          </Col>
          <Col span={16}>
            <Row
              className="navbar__row"
              gutter={24}
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              <Col span={4}>
                <a href="">Home</a>
              </Col>
              <Col span={4}>
                <a href="">About</a>
              </Col>
              <Col span={4}>
                <a href="">Trips</a>
              </Col>
              <Col span={4}>
                <a href="">Blog</a>
              </Col>
              <Col span={4}>
                <a href="">Contact</a>
              </Col>
              <Col span={4} onClick={() => this.signUp()}>
                SignUp
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal
          title="SignUp "
          visible={this.state.visible}
          footer={false}
          width={900}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <SignUp />
        </Modal>
      </div>
    );
  }
}

export default NavBar;
