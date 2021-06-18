import React from "react";
import Head from "next/head";

import { Explanation } from "../Layout/Explanation";
import { Main } from "../Layout/Main";
import { RandomAlignmentTables } from "../Alignment/RandomAlignmentTables";

const Page = () => (
  <>
    <Head>
      <title>Random alignment tables - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Explanation>
      <p>
        Given a territory has a <strong>dominant alignment</strong> and a
        certain <strong>tolerance</strong> for other ideologies, then we can roll dice
        for the alignments of random individuals there.
      </p>
      <p>
        For example, how likely is your cleric to encounter potential converts
        to their Lawful Evil God, or how likely is it that your character
        bleeding to death by the side of the road will be discovered by a goodie
        rather than a baddie?
      </p>
      <p>Let the dice decide!</p>
    </Explanation>
    <Main>
      <RandomAlignmentTables />
    </Main>
  </>
);

export default Page;
