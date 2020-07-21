import React from "react";
import Head from "next/head";

import AlignmentGenerator from "../components/AlignmentGenerator";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>LL782 Pathfinder Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <AlignmentGenerator alignmentName="Lawful Good" />
        <AlignmentGenerator alignmentName="Chaotic Good" />
        <AlignmentGenerator alignmentName="Lawful Evil" />
        <AlignmentGenerator alignmentName="Chaotic Evil" />
      </Main>
    </>
  );
}
