import React from "react";
import TabButton from "./TabButton";
export default function TabsList() {
  return (
    <div className="row mx-auto my-3 d-blue align-items-center bg-white br-8 p-2">
      <TabButton active={true} title={"Active listings"} />
      <TabButton title={"Pending listings"} />
      <TabButton title={"Active listings"} />
      <TabButton title={"Terminated listings"} />
      <TabButton title={"Imported listings"} />
    </div>
  );
}
