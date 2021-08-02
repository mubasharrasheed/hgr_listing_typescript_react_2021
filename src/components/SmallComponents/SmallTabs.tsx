import React from "react";
interface Props {
  title: string;
  last: boolean;
}
export default function SmallTabs(props: Props) {
  const { title, last } = props;
  return (
    <div className={`col ${!last ? "border-right border-primary" : ""}`}>
      {title}
    </div>
  );
}
