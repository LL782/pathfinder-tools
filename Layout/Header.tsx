import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const pageLinks: Array<{ href: string; text: string }> = [
    {
      href: "/random-alignment-tables",
      text: "Random Alignment Tables",
    },
    {
      href: "/speed-and-distance",
      text: "Speed and Distance",
    },
  ];

  const currentPath = useRouter().asPath;

  return (
    <>
      <header>
        {pageLinks.map(({ href, text }) => {
          const active = href === currentPath;

          return (
            <Link href={href} key={href}>
              <a className={active && "active"}>{text}</a>
            </Link>
          );
        })}
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
        a.active {
          color: black;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
