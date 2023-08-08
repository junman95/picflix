import React from "react";
import "../styles/layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
