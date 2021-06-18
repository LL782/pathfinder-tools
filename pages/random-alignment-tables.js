import React from "react";
import Head from "next/head";

import { RandomAlignmentTable } from "../components/RandomAlignmentTable";
import { Main } from "../components/Main";

const dominance = 10;

const Page = () => (
  <>
    <Head>
      <title>Random alignment tables - LL782 Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <RandomAlignmentTable alignment="Lawful Good" dominance={dominance} />
      <RandomAlignmentTable alignment="Neutral Good" dominance={dominance} />
      <RandomAlignmentTable alignment="Chaotic Good" dominance={dominance} />
      <RandomAlignmentTable alignment="Lawful Neutral" dominance={dominance} />
      <RandomAlignmentTable alignment="True Neutral" dominance={dominance} />
      <RandomAlignmentTable alignment="Chaotic Neutral" dominance={dominance} />
      <RandomAlignmentTable alignment="Lawful Evil" dominance={dominance} />
      <RandomAlignmentTable alignment="Neutral Evil" dominance={dominance} />
      <RandomAlignmentTable alignment="Chaotic Evil" dominance={dominance} />
    </Main>
  </>
);

export default Page;
