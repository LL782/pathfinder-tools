import React from "react";

export const CentralFlex = ({ children }) => (
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
