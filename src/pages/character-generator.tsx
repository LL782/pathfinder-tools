import React from "react";
import Head from "next/head";
import Image from "next/image";

import { CharacterGenerator } from "../components/CharacterGenerator";

const Page = () => (
  <>
    <Head>
      <title>Character Generator - Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CharacterGenerator />
  </>
);

export default Page;
