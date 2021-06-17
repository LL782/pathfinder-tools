import React from "react";
import Head from "next/head";

import Main from "../components/Main";

const dominance = 10;

const RandomAlignmentTables = () => (
  <>
    <Head>
      <title>Speed and distance notes - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <article>
        <h1>Speed and distance</h1>
        <h2>notes for use in Pathfinder</h2>
        <h3>Unit notes</h3>
        <p>5,280' = 1 mile</p>
        <h3>Example speeds</h3>

        <h4>Slow character at full speed</h4>
        <p>Forty feet per round</p>
        <p>Four-hundred feet in a minute</p>

        <h4>Average character at full speed</h4>
        <p>One-hundred-and-twenty feet per round</p>
        <p>One-thousand-two-hundred feet in a minute</p>

        <h4>Exceptionally fast character at full speed</h4>
        <p>Two-hundred feet per round</p>
        <p>Two-thousand feet in a minute</p>
      </article>
    </Main>
  </>
);

export default RandomAlignmentTables;
