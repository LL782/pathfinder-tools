import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Explanation = ({ children }: Props) => (
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
