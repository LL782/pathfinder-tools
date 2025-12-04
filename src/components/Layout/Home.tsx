import Link from "next/link";

import { pageLinks } from "../../hooks/pageLinks";

export const Home = () => (
  <>
    <main>
      <h1>Pathfinder Tools</h1>
      <h2>Contents</h2>
      <ul>
        {pageLinks.map(
          ({ href, text }) =>
            href !== "/" && (
              <li key={href}>
                <Link href={href}>
                  <strong>{text}</strong>
                </Link>
              </li>
            )
        )}
      </ul>
    </main>
    <h2>About</h2>
    <p>
      I've chosen to put this online to make it easier for me to find and so
      others can get involved. All feedback appreciated.
    </p>
    <p>
      <a href="https://github.com/LL782/pathfinder-tools#readme">
        More about this project on GitHub
      </a>
    </p>
  </>
);
