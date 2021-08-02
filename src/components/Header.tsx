import React from "react";
import ring_icon from "../assets/notification.svg";
import flag from "../assets/flag-round-500.svg";
import amazon from "../assets/amazon-icon-1.svg";
import { Menu, Dropdown, Button, Space } from "antd";
import plus from "../assets/plus.svg";
import { Progress } from "antd";
import TabsList from "./SmallComponents/TabsList";
import SearchBar from "./SmallComponents/SearchBar";

import { AudioOutlined } from "@ant-design/icons";
function Header(props: any) {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const menu = (
    <Menu>
      <div className="drop-down">
        <div className="row mx-auto my-2 align-items-center">
          <div className="col-12">
            <Progress
              percent={40}
              showInfo={false}
              strokeColor={{
                "0%": "#87d068",
                "100%": "#87d068",
              }}
            />
          </div>
          <div className="col-md-12">
            <div className="d-flex my-1">
              <span className="d-blue small">Quota:45%(12/30)</span>
              <span className="text-success ml-auto small">Upgrade</span>
            </div>
          </div>
          <div className="col-md-12 mb-2">
            <div className="d-flex aligh-items-center">
              <div className="d-blue lh-1 font-weight-bold">Linked store</div>
              <img src={flag} className="lh-1 mx-2" height="20" alt="" />
              <img src={amazon} className="pt-1 lh-1" height="20" alt="" />
            </div>
          </div>
          <div className="col-md-12 mb-2">
            <div className="d-flex aligh-items-center">
              <div className="d-blue lh-1 font-weight-bold">Linked store</div>
              <img src={flag} className="lh-1 mx-2" height="20" alt="" />
              <img src={amazon} className="pt-1 lh-1" height="20" alt="" />
            </div>
          </div>
          <div className="col-md-12 mb-2">
            <div className="d-flex aligh-items-center">
              <div className="d-blue lh-1 font-weight-bold">Linked store</div>
              <img src={flag} className="lh-1 mx-2" height="20" alt="" />
              <img src={amazon} className="pt-1 lh-1" height="20" alt="" />
            </div>
          </div>
          <div className="col-md-12 mb-2 pl-2">
            <div className="bg-lighter br-15 py-1 w-fit d-flex align-items-center">
              <div className="d-blue lh-1 pl-1 font-weight-bold px-2 small">
                Add new channel
              </div>
              <Button className="border-0 bg-trans pl-2 pr-1 py-0 lh-1 h-100">
                <img src={plus} height="18" alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Menu.Item className="p-0 bg-trans">
        <div className="d-flex py-2 pr-2 pr-lg-4 mx-auto text-right text-danger align-items-center small">
          <i className="fas fa-sign-out-alt pr-1 ml-auto"></i> Logout
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="bg-trans" style={{ padding: 0 }}>
        <div className="plx-lg-4 px-md-3 px-2">
          <div className="row mx-auto pt-4">
            <h5 className="mb-0 d-blue font-weight-bold">Listings</h5>
            <div className="col-lg-6 col-md-8 ml-auto">
              <div className="d-flex align-items-center  bg-white rounded p-lg-2 p-1 w-fit ml-auto">
                <img src={ring_icon} height="20" className="" alt="" />
                <div className="ml-2 mr-3 d-blue lh-1">
                  {" "}
                  <span className="font-weight-bold">2</span> notifications{" "}
                </div>
                <div className="d-blue mr-3 lh-1">
                  <i className="fas fa-circle yellow"></i>
                  <span className="font-weight-bold"> 12</span> Tokens{" "}
                </div>
                <div className="d-blue mr-3 lh-1 font-weight-bold">
                  Linked store
                </div>
                <img src={flag} className="mx-2 lh-1" height="20" alt="" />
                <img src={amazon} className="mx-2 lh-1" height="20" alt="" />
                <div className="ml-auto">
                  <Space direction="vertical">
                    <Space wrap>
                      <Dropdown overlay={menu} placement="bottomLeft">
                        <Button>
                          <i className="fas fa-ellipsis-v"></i>
                        </Button>
                      </Dropdown>
                    </Space>
                  </Space>
                </div>
              </div>
            </div>
          </div>

          <SearchBar />
          <TabsList />
        </div>
      </div>
    </div>
  );
}

export default Header;
