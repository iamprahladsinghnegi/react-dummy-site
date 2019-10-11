import React, { Component } from "react";
import "./index.scss";
import { Row, Col } from "antd";

class OurStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ourstory">
        <Row gutter={24} style={{ margin: 0 }}>
          <Col span={12}>
            <div className="ourstory__content">
              <temp>DISCOVER STORY</temp>
              <br />
              <h1> Our Story </h1>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Animi quae expedita fugiat quo incidunt,
              possimus temporibus aperiam eum, quaerat sapiente. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dignissimos debitis
              enim a pariatur molestiae.
            </div>
          </Col>
          <Col span={12}>
            <img src="https://colorlib.com/preview/theme/trips/images/traveler.jpg"></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OurStory;
