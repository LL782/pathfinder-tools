import React from "react";

import { Header } from "../Header";

export const Main = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <style jsx>{`
      main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </>
);
