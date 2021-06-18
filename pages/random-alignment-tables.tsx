import React from "react";
import Head from "next/head";

import { RandomAlignmentTables } from "../Alignment/RandomAlignmentTables";
import { Main } from "../Layout/Main";

const Page = () => (
  <>
    <Head>
      <title>Random alignment tables - LL782 Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <RandomAlignmentTables />
    </Main>
  </>
);

export default Page;
