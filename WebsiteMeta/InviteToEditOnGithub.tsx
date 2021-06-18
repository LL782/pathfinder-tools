import { useRouter } from "next/router";
import React from "react";

export const InviteToEditOnGitHub = () => {
  const path = useRouter().asPath;
  const slug = path === "/" ? "index.tsx" : `${path}.tsx`;

  return (
    <section>
      <hr />
      <p>
        Spotted something?{" "}
        <a href={`https://github.com/LL782/pathfinder-tools/issues/new`}>
          Raise an issue
        </a>
        ,{" "}
        <a
          href={`https://github.com/LL782/pathfinder-tools/edit/master/pages/${slug}`}
        >
          suggest an edit
        </a>{" "}
        or message me via{" "}
        <a href={`https://github.com/LL782/pathfinder-tools/`}>my GitHub</a>
      </p>
    </section>
  );
};
