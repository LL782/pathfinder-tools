import React from "react";
import Head from "next/head";

import RandomAlignmentTable from "../components/RandomAlignmentTable";
import Main from "../components/Main";

const Home = () => (
  <>
    <Head>
      <title>LL782 Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <RandomAlignmentTable alignmentName="Lawful Good" />
      <RandomAlignmentTable alignmentName="Chaotic Good" />
      <RandomAlignmentTable alignmentName="Lawful Evil" />
      <RandomAlignmentTable alignmentName="Chaotic Evil" />
    </Main>
  </>
);

export default Home;
