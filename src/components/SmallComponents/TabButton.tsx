import React from "react";

export default function TabButton(props: any) {
  const { title, active } = props;
  return (
    <div className="col pl-lg-0 my-2 my-md-0 lh-1">
      <button
        className={`btn px-lg-3 px-2 ${
          active ? "bg-purple text-white" : "bg-trans text-dark"
        } border-0 br-8 py-1`}
      >
        {title}
      </button>
    </div>
  );
}
