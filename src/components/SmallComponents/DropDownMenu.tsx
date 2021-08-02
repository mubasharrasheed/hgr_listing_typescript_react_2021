import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { Progress } from "antd";
import HeaderDropDownItem from "../SmallComponents/HeaderDropDownItem";
import plus from "../../assets/plus.svg";

export default function DropDownMenu() {
  return (
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
          <HeaderDropDownItem />
          <HeaderDropDownItem />

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
}