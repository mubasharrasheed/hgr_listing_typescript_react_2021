import { Table } from "antd";
import React from "react";
import img from "../assets/icon.png";
import SmallTabs from "./SmallComponents/SmallTabs";
import { columns } from "../data";

const data: any = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    img: <img src={img} height={30} alt="" />,
    // item: 1234546789,
    src: "Amazon",
    title: "title the of product abc efd xyz",
    sell: 30.4,
    cost: 34.44,
    profile: 309,
    markup: <div className="pl-2">30%</div>,
    stock: (
      <div className="pl-1">
        <i className="d-green far fa-check-circle"></i> 2
      </div>
    ),
    // ,
    // created: (
    //   <div className="d-flex align-items-center">
    //     <div className="d-blue">13/07/2021 12:56</div>
    //     <div className="lh-1">
    //       {" "}
    //       <button className="fas fa-edit btn border-0 bg-trans mr-2 ml-3 p-0"></button>
    //     </div>
    //     <div className="lh-1">
    //       {" "}
    //       <button className="fas fa-ellipsis-v btn border-0 bg-trans mr-2 ml-3 p-0"></button>
    //     </div>
    //   </div>
    // ),
  });
}

class TableContent extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys: any) => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: (changableRowKeys: any) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter(
              (key: any, index: any) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              }
            );
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: (changableRowKeys: any) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter(
              (key: any, index: any) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              }
            );
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="bg-white rounded">
          <div className="row mx-auto p-3 align-items-center">
            <div className="col-lg-2 col-md-3 mr-3 d-blue">5 selected</div>
            <div className="col-lg-5 col-md-8 mr-3 bg-lighter br-15 p-2">
              <div className="row d-blue">
                <SmallTabs title={"Edit 5 Listings"} last={false} />
                <SmallTabs title={"Copy 5 Listings"} last={false} />
                <SmallTabs title={"Optimize 5 Listings"} last={true} />
              </div>
            </div>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TableContent;
