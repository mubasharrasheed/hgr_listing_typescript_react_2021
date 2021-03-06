import React from "react";
interface Props {
  title: string;
  active: number;
  index: number;
  onChangeTab: () => void;
}
export default function TabButton(props: Props) {
  const { title, active, onChangeTab, index } = props;
  const isActive = active == index;
  return (
    <div className="col pl-lg-0 my-2 my-md-0 lh-1 px-1">
      <button
        onClick={onChangeTab}
        className={`btn px-lg-3 px-2 ${
          active == index ? "bg-purple text-white" : "bg-trans text-dark"
        } border-0 br-8 py-1`}
      >
        {title}
      </button>
    </div>
  );
}
