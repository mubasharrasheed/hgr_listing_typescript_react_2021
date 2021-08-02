import React from "react";

export default function ToggleButton(props: any) {
  return (
    <i
      onClick={props.toggle}
      className="fas fa-chevron-right text-white bg-dark rounded p-1 m-2 w-fit"
    ></i>
  );
}
