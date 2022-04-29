import React from "react";

export const TablesCollection = ({ children }) => (
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
