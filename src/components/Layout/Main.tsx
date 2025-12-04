import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => <main>{children}</main>;
