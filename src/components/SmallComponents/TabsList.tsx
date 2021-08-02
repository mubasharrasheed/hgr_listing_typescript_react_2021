import React, { useState } from "react";
import TabButton from "./TabButton";
export default function TabsList() {
  const [active, setActive] = useState(1);
  const onChangeTab = (value: any) => {
    setActive(value);
  };
  return (
    <div className="row mx-auto my-3 d-blue align-items-center bg-white br-8 p-2">
      <TabButton
        onChangeTab={onChangeTab}
        index={1}
        active={active}
        title={"Active listings"}
      />
      <TabButton
        onChangeTab={onChangeTab}
        index={2}
        active={active}
        title={"Pending listings"}
      />
      <TabButton
        onChangeTab={onChangeTab}
        index={3}
        active={active}
        title={"Active listings"}
      />
      <TabButton
        onChangeTab={onChangeTab}
        index={4}
        active={active}
        title={"Terminated listings"}
      />
      <TabButton
        onChangeTab={onChangeTab}
        index={5}
        active={active}
        title={"Imported listings"}
      />
    </div>
  );
}
