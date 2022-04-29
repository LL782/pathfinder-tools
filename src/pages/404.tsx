import React from "react";
import Head from "next/head";

import { Explanation } from "../components/Layout/Explanation";
import { Main } from "../components/Layout/Main";

const Page = () => (
  <>
    <Head>
      <title>404 - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <h2>404</h2>
      <Explanation>
        <p>The URL parses without incident</p>
      </Explanation>
    </Main>
  </>
);

export default Page;
