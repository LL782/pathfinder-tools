import React from "react";
import Link from "next/link";

const MainNav = () => (
  <>
    <nav>
      <Link href="/random-alignment-tables">Random Alignment Tables</Link>
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </>
);

export default MainNav;
