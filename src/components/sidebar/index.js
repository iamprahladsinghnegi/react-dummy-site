import React, { Component } from "react";
import { Tabs, Row, Col, Button, Modal } from "antd";
import "./index.scss";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-nav">
          <img src="https://designrevision.com/demo/shards-dashboard-lite-react/static/media/shards-dashboards-logo.60a85991.svg"></img>
          Shards Dashboard
        </div>
        <Tabs defaultActiveKey="1" tabPosition="left" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        ,
      </div>
    );
  }
}

export default SideBar;
