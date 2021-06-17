import React from "react";
import Link from "next/link";

const MainNav = () => (
  <>
    <nav>
      <Link href="/random-alignment-tables">
        <a>Random Alignment Tables</a>
      </Link>
    </nav>
    <style jsx>{`
      nav {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 100vh;
      }
      a {
        padding: 0.25rem;
      }
    `}</style>
  </>
);

export default MainNav;
