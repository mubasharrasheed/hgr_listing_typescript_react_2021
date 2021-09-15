import React, { useState,useEffect } from "react";
import { Table } from "antd";
import img from "../assets/icon.png";
import SmallTabs from "./SmallComponents/SmallTabs";
import { columns } from "../data";
import { setTranslations, setDefaultLanguage, useTranslation } from 'react-multi-lang'




const windowwidth = window.innerWidth;
export default function TableContent() {
  const [selectedRowKeys, setSelectRowKeys] = useState([]);
  const [data1, setData] = useState([]);

  const t = useTranslation()
  const onSelectChange = (selectedRowKeys: any) => {
    setSelectRowKeys(selectedRowKeys);
    const selected = selectedRowKeys.length;
  };
  
 
  useEffect(() => {
    const data: any = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        img: <img src={img} height={30} alt="" />,
        // item: 1234546789,
        src: "Amazon",
        title: (
          <div className="w-title">
            {" "}
            <u>
              {t("Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesua ff")}
              
            </u>{" "}
          </div>
        ),
        sell: 30.4,
        cost: 34.44,
        profile: 309,
        markup: <div className="pl-2">30%</div>,
        stock: (
          <div className="pl-1">
            <i className="d-green far fa-check-circle"></i> 2
          </div>
        ),
      });
    }
    setData(data)
  }, [])
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
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
          setSelectRowKeys(newSelectedRowKeys);
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
          setSelectRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="bg-white rounded">
        <div className="row mx-auto p-1 align-items-center">
          {selectedRowKeys.length ? (
            <div className="col-lg-6 col-md-8 mr-3 bg-lighter br-15 p-2">
              <div className="row d-blue">
                {selectedRowKeys.length ? (
                  <SmallTabs
                    title={`Edit ${selectedRowKeys.length} ${
                      windowwidth < 900 ? "" :t("acnt")
                    } `}
                    last={false}
                  />
                ) : (
                  ""
                )}
                {selectedRowKeys.length ? (
                  <SmallTabs
                    title={`Copy ${selectedRowKeys.length} ${
                      windowwidth < 900 ? "" : "Listings"
                    } `}
                    border={true}
                    last={false}
                  />
                ) : (
                  ""
                )}
                {selectedRowKeys.length ? (
                  <SmallTabs
                    title={`Optimize ${selectedRowKeys.length} ${
                      windowwidth < 900 ? "" : "Listings"
                    } `}
                    last={false}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data1}
        />
      </div>
    </React.Fragment>
  );
}
