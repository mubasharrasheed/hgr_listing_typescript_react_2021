import React from "react";
import list_saerch from "../../assets/list_search.jpg";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import search_icon from "../../assets/search.svg";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = () => console.log();
export default function SearchBar() {
  return (
    <div className="row mx-auto py-3">
      <div className="col-md-5 pl-lg-0 my-2 my-md-0 lh-1 px-0">
        <div className="input-group input-group-sm border py-1 rounded pr-1 bg-white">
          <input
            type="text"
            className="form-control border-0"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search..."
          />
          <div className="input-group-prepend">
            <button
              className="input-group-text bg-white"
              id="inputGroup-sizing-sm"
            >
              <img src={search_icon} height="15" alt="" />
            </button>
          </div>
        </div>
        {/* <Search
          placeholder="Search..."
          className="border-0 rounded bg-white h-100"
          allowClear
          style={{ width: "90%" }}
        /> */}
      </div>
      <div className="col-md-3 my-md-0 lh-1 pl-2 d-lg-block d-none">
        <button className="btn px-lg-5 px-2 bg-purple text-white border-0 br-8 h-100">
          <img src={list_saerch} className="invert" height="20" alt="" />{" "}
          Advance Search
        </button>
      </div>
    </div>
  );
}
