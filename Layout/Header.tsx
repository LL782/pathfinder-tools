import React from "react";
import Link from "next/link";

export const Header = () => (
  <>
    <header>
      <Link href="/">
        <a>Pathfinder Tools</a>
      </Link>
      <Link href="/random-alignment-tables">
        <a>Random Alignment Tables</a>
      </Link>
      <Link href="/speed-and-distance">
        <a>Speed and Distance</a>
      </Link>
    </header>

    <style jsx>{`
      header {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: left;
      }
      a {
        padding: 0.5rem;
      }
      a:first-child {
        padding-left: 0;
      }
    `}</style>
  </>
);
