import React from "react";

interface Props {
  children: React.ReactNode;
}

export const TablesCollection = ({ children }: Props) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </>
);
