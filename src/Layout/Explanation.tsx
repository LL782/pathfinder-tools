import React from "react";

export const Explanation = ({ children }) => (
  <>
    <aside>{children}</aside>
    <hr />
    <style jsx>{`
      aside {
        max-width: 550px;
      }
    `}</style>
  </>
);
