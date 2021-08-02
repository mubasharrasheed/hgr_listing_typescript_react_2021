import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import React from "react";
import TableContent from "./components/TableContent";
import ContentLayout from "./components/ContentLayout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ToggleButton from "./components/ToggleButton";
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
          {this.state.collapsed && <ToggleButton toggle={this.toggle} />}
          <Header />
          <ContentLayout>
            <TableContent />
          </ContentLayout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
