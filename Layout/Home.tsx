import React from "react";
import Link from "next/link";

import { InviteToEditOnGitHub } from "../WebsiteMeta/InviteToEditOnGithub";
import { pageLinks } from "../WebsiteMeta/pageLinks";

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
      <p>Welcome to this collection of Pathfinder tools.</p>
    </main>
    <InviteToEditOnGitHub />
  </>
);
