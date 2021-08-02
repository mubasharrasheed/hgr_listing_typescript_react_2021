import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function ContentLayout(props: any) {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 280,
      }}
    >
      {props.children}
    </Content>
  );
}
