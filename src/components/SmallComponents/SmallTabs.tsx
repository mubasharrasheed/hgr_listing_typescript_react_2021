import React from "react";

export default function SmallTabs(props: any) {
  const { title, last } = props;
  return (
    <div className={`col ${!last ? "border-right border-primary" : ""}`}>
      {title}
    </div>
  );
}
