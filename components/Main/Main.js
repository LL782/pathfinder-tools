import React from "react";

const Main = ({ children }) => (
  <>
    <main>{children}</main>
    <style jsx>{`
      main {
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </>
);

export default Main;
