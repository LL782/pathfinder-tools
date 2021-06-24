import React from "react";
import Head from "next/head";

import { Explanation } from "../Layout/Explanation";
import { Main } from "../Layout/Main";

const Page = () => (
  <>
    <Head>
      <title>Character Stats Generator - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Explanation>
      <p>
        I roll three d6, six times, per stat. This tool does that at the touch
        of a button...
      </p>
    </Explanation>
    <Main>
      <p>
        <strong>Character Stats Generator not implemented :)</strong>
      </p>
    </Main>
  </>
);

export default Page;
