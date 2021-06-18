import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { pageLinks } from "../WebsiteMeta/pageLinks";

export const Header = () => {
  const currentPath = useRouter().asPath;

  return (
    <>
      <header>
        <nav>
          {pageLinks.map(({ href, text }) => {
            const active = href === currentPath;

            return (
              <Link href={href} key={href}>
                <a className={active && "active"}>{text}</a>
              </Link>
            );
          })}
        </nav>
      </header>

      <style jsx>{`
        nav {
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
        a.active {
          color: black;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
