import Link from "next/link";
import { useRouter } from "next/router";

import { pageLinks } from "../../hooks/pageLinks";

export const Header = () => {
  const currentPath = useRouter().asPath;

  return (
    <>
      <header>
        <nav>
          {pageLinks.map(({ href, text }) => {
            const isActive = href === currentPath;

            return (
              <Link href={href} key={href} className={isActive ? "active" : ""}>
                {text}
              </Link>
            );
          })}
        </nav>
      </header>
      <hr />

      <style jsx>{`
        nav {
          align-items: center;
          display: flex;
          justify-content: left;
          font-weight: 600;
          gap: 0.5rem;
        }
        @media screen and (max-width: 599px) {
          nav {
            flex-direction: column;
          }
        }
        @media screen and (min-width: 600px) {
          nav {
            flex-direction: row;
          }
        }

        nav :global(a.active) {
          color: black;
        }
      `}</style>
    </>
  );
};
