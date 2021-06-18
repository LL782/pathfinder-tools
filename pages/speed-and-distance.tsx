import React from "react";
import Head from "next/head";

import { Explanation } from "../Layout/Explanation";
import { Main } from "../Layout/Main";
import { TablesCollection } from "../Layout/TablesCollection";

const Page: React.FC = () => (
  <>
    <Head>
      <title>Speed and distance notes - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Explanation>
      <p>Not much here yet, just a few seeds I found on paper</p>
    </Explanation>
    <Main>
      <TablesCollection>
        <article>
          <p>5,280' = 1 mile</p>
        </article>
        <article>
          <strong>Slow character at full speed</strong>
          <p>Forty feet per round</p>
          <p>Four-hundred feet in a minute</p>
        </article>
        <article>
          <strong>Average character at full speed</strong>
          <p>One-hundred-and-twenty feet per round</p>
          <p>One-thousand-two-hundred feet in a minute</p>
        </article>
        <article>
          <strong>Exceptionally fast character at full speed</strong>
          <p>Two-hundred feet per round</p>
          <p>Two-thousand feet in a minute</p>
        </article>
      </TablesCollection>
    </Main>
    <style jsx>{`
      article {
        padding: 1rem;
        border: 0.1rem solid #666;
        margin: 0.5rem;
        box-shadow: 0.125rem 0.125rem 0 0.125rem;
      }
    `}</style>
  </>
);

export default Page;
