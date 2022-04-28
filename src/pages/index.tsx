import React from "react";
import Head from "next/head";

import { Home } from "../Layout/Home";

const Page = () => (
  <>
    <Head>
      <title>Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </>
);

export default Page;
