import React from "react";
import list_saerch from "../../assets/list_search.jpg";

import { Input } from "antd";
const { Search } = Input;

export default function SearchBar(props: any) {
  return (
    <div className="row mx-auto py-3">
      <div className="col-md-5 pl-lg-0 my-2 my-md-0 lh-1">
        <Search
          placeholder="Search..."
          className="border-0 rounded bg-white h-100"
          allowClear
          style={{ width: "90%" }}
        />
      </div>
      <div className="col-md-3 pl-lg-0 my-2 my-md-0 lh-1">
        <button className="btn px-lg-5 px-2 bg-purple text-white border-0 br-8 h-100">
          <img src={list_saerch} className="invert" height="20" alt="" />{" "}
          Advance Search
        </button>
      </div>
    </div>
  );
}
