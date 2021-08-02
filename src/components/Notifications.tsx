import React from "react";
import ring_icon from "../assets/notification.svg";
import flag from "../assets/flag-round-500.svg";
import amazon from "../assets/amazon-icon-1.svg";
import { Menu, Dropdown, Button, Space } from "antd";
import DropDownMenu from "./SmallComponents/DropDownMenu";
import { AudioOutlined } from "@ant-design/icons";

export default function Notifications(props: any) {
  return (
    <div className="row mx-auto pt-4">
      <h5 className="mb-0 d-blue font-weight-bold">{props.title}</h5>
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
          <div className="d-blue mr-3 lh-1 font-weight-bold">Linked store</div>
          <img src={flag} className="mx-2 lh-1" height="20" alt="" />
          <img src={amazon} className="mx-2 lh-1" height="20" alt="" />
          <div className="ml-auto">
            <Space direction="vertical">
              <Space wrap>
                <Dropdown overlay={<DropDownMenu />} placement="bottomLeft">
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
  );
}
