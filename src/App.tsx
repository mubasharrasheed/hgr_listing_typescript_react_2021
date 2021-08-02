import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import React from "react";
import TableContent from "./components/TableContent";
import ContentLayout from "./components/ContentLayout";
import HeaderLayout from "./components/HeaderLayout";
import Sidebar from "./components/Sidebar";
import ToggleButton from "./components/ToggleButton";
import TabsList from "./components/SmallComponents/TabsList";
import SearchBar from "./components/SmallComponents/SearchBar";
import Notifications from "./components/Notifications";

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
          <HeaderLayout>
            <Notifications title={"Listings"} />
            <SearchBar />
            <TabsList />
          </HeaderLayout>
          <ContentLayout>
            <TableContent />
          </ContentLayout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
