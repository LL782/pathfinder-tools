import { useRouter } from "next/router";
import React from "react";

export const InviteToEditOnGitHub = () => {
  const path = useRouter().asPath;
  const slug = path === "/" ? "index.tsx" : `${path}.tsx`;

  return (
    <section>
      <hr />
      <p>
        Spotted a typo?{" "}
        <a
          href={`https://github.com/LL782/pathfinder-tools/blob/master/pages/${slug}`}
        >
          Edit on Github
        </a>
      </p>
    </section>
  );
};
