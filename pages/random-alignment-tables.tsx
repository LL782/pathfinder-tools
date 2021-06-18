import React from "react";
import Head from "next/head";

import { CentralFlex } from "../Layout/CentralFlex";
import { Main } from "../Layout/Main";
import { RandomAlignmentTable } from "../Alignment/RandomAlignmentTable";

const d = 10;

const Page = () => (
  <>
    <Head>
      <title>Random alignment tables - LL782 Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <CentralFlex>
        <RandomAlignmentTable alignment="Lawful Good" dominance={d} />
        <RandomAlignmentTable alignment="Neutral Good" dominance={d} />
        <RandomAlignmentTable alignment="Chaotic Good" dominance={d} />
        <RandomAlignmentTable alignment="Lawful Neutral" dominance={d} />
        <RandomAlignmentTable alignment="True Neutral" dominance={d} />
        <RandomAlignmentTable alignment="Chaotic Neutral" dominance={d} />
        <RandomAlignmentTable alignment="Lawful Evil" dominance={d} />
        <RandomAlignmentTable alignment="Neutral Evil" dominance={d} />
        <RandomAlignmentTable alignment="Chaotic Evil" dominance={d} />
      </CentralFlex>
    </Main>
  </>
);

export default Page;
