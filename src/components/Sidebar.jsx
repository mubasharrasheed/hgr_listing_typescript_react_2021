import React from "react";
import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import catalog from "../assets/catalog.svg";
import listnow from "../assets/plus.svg";
import settings from "../assets/settings.svg";
import services from "../assets/services.svg";
import help from "../assets/help.svg";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
export default function Sidebar({collapsed,toggle}) {
  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="0" icon={<img src={logo} height={30} />}>
          <span className="font-weight-bold d-blue">HGR</span>
        </Menu.Item>
        <div className="text-white">
          {collapsed ? (
            ""
          ) : (
            <i
              onClick={toggle}
              className="fas fa-chevron-left text-dark bg-light rounded p-1 ml-auto float-right m-2"
            ></i>
          )}
        </div>
        <Menu.Item key="1" icon={<img src={dashboard} height={20} />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<img src={catalog} height={20} />}>
          Catalog
        </Menu.Item>
        <Menu.Item key="3" icon={<img src={listnow} height={20} />}>
          List now
        </Menu.Item>
        <Menu.Item key="4" icon={<i className="fas fa-list d-blue"></i>}>
          Listings
        </Menu.Item>
        <Menu.Item key="5" icon={<img src={settings} height={20} />}>
          Settings <i className="fas fa-sort-down text-dark ml-2"></i>
        </Menu.Item>
        <Menu.Item key="6" icon={<img src={services} height={20} />}>
          Services <i className="fas fa-sort-down text-dark ml-2"></i>
        </Menu.Item>
        <Menu.Item key="7" icon={<img src={help} height={20} />}>
          Help <i className="fas fa-sort-down text-dark ml-4 pl-1"></i>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
