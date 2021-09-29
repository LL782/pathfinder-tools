import { useRouter } from "next/router";
import React from "react";

export const InviteToEditOnGitHub = () => {
  const path = useRouter().asPath;
  const slug = path === "/" ? "/index.tsx" : `${path}.tsx`;

  return (
    <section>
      <hr />
      <p>
        Thought of something?{" "}
        <a href={`https://github.com/LL782/pathfinder-tools/issues/new`}>
          Raise it
        </a>
        ,{" "}
        <a
          href={`https://github.com/LL782/pathfinder-tools/edit/master/pages${slug}`}
        >
          suggest an edit
        </a>{" "}
        or message me on{" "}
        <a href={`https://github.com/LL782/pathfinder-tools/#readme`}>
          the GitHub
        </a>
      </p>
    </section>
  );
};
