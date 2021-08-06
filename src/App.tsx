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
import SidebarMb from "./components/SidebarMb";

class App extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="bg-white">
        <div
          onMouseEnter={() => this.setState({ collapsed: false })}
          className="d-none d-lg-block"
        >
          <Sidebar toggle={this.toggle} collapsed={this.state.collapsed} />
        </div>
        <Layout className="site-layout">
          <div className="d-block d-lg-none">
            <SidebarMb />
          </div>

          <HeaderLayout>
            <Notifications title={"Listings"} />
            <div className="d-md-block d-none">
              <SearchBar />
            </div>
            <TabsList />
            <div className="my-2 d-block d-md-none">
              <SearchBar />
            </div>
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
