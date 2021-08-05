import React, { useState } from "react";
import TabButton from "./TabButton";

export default function TabsList() {
  const [active, setActive] = useState(1);
  const onChangeTab = (number: number) => {
    setActive(number);
  };
  return (
    <div className="row mx-auto my-3 d-blue align-items-center bg-white br-8 p-2">
      <TabButton
        onChangeTab={() => onChangeTab(1)}
        index={1}
        active={active}
        title={"Active listings"}
      />
      <TabButton
        onChangeTab={() => onChangeTab(2)}
        index={2}
        active={active}
        title={"Pending listings"}
      />
      <TabButton
        onChangeTab={() => onChangeTab(3)}
        index={3}
        active={active}
        title={"Terminated listings"}
      />
      <TabButton
        onChangeTab={() => onChangeTab(4)}
        index={4}
        active={active}
        title={"Imported listings"}
      />
    </div>
  );
}
