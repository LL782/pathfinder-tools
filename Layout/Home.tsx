import React from "react";
import Link from "next/link";

import { pageLinks } from "../pageLinks";

export const Home = () => (
  <>
    <main>
      <h1>Pathfinder Tools</h1>
      <ul>
        {pageLinks.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </>
);
