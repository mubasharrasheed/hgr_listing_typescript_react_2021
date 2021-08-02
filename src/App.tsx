import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React from "react";
import Listing from "./components/Listing";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
const { Content } = Layout;
class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="bg-white">
        <Sidebar toggle={this.toggle} collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          {this.state.collapsed ? (
            <i
              onClick={this.toggle}
              className="fas fa-chevron-right text-white bg-dark rounded p-1 m-2 w-fit"
            ></i>
          ) : (
            ""
          )}
          <Header />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
            <Listing />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
