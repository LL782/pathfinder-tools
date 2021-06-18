import React from "react";
import Link from "next/link";

export const MainNav = () => (
  <>
    <nav>
      <Link href="/random-alignment-tables">
        <a>Random Alignment Tables</a>
      </Link>
      <Link href="/speed-and-distance">
        <a>Speed and Distance</a>
      </Link>
    </nav>
    <style jsx>{`
      nav {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
      }
      a {
        padding: 0.25rem;
      }
    `}</style>
  </>
);
