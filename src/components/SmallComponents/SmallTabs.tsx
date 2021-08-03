import React from "react";
interface Props {
  title: string;
  last?: boolean;
}
export default function SmallTabs(props: Props) {
  const { title, last } = props;
  const cssClass = last ? "col-md" : "col-md border-right border-primary";
  return <div className={cssClass}>{title}</div>;
}
