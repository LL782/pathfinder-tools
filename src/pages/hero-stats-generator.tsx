import React from "react";
import Head from "next/head";

import { Explanation } from "../components/Layout/Explanation";
import { Main } from "../components/Layout/Main";

import { HeroStatsGenerator } from "../components/Stats/HeroStatsGenerator";

const Page = () => (
  <>
    <Head>
      <title>Character Stats Generator - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <h2>Hero Stats Generator</h2>
      <Explanation>
        <p>
          I gen player-characters (and a lot of non-player-characters) with
          "hero quality" stats. This was the method I was taught when learning
          AD&amp;D in 1980s:
        </p>
        <blockquote>
          For each stat roll 3d6, six times and keep the highest
        </blockquote>
        <p>
          It's a hard habit to kick and I don't get any objections from players.
        </p>
      </Explanation>
      <HeroStatsGenerator />
    </Main>
  </>
);

export default Page;
