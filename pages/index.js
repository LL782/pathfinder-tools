import React from "react";
import Head from "next/head";

import MainNav from "../components/MainNav";

const Home = () => (
  <>
    <Head>
      <title>LL782 Pathfinder Tools</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Pathfinder Tools</h1>
    <MainNav />
    <style jsx>
      {`
        h1 {
          text-align: center;
        }
      `}
    </style>
  </>
);

export default Home;
