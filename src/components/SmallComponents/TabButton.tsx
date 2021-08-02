import React from "react";

export default function TabButton(props: any) {
  const { title, active, onChangeTab, index } = props;
  return (
    <div className="col pl-lg-0 my-2 my-md-0 lh-1">
      <button
        onClick={() => onChangeTab(index)}
        className={`btn px-lg-3 px-2 ${
          active == index ? "bg-purple text-white" : "bg-trans text-dark"
        } border-0 br-8 py-1`}
      >
        {title}
      </button>
    </div>
  );
}
