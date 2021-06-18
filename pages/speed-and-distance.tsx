import React from "react";
import Head from "next/head";

import { Explanation } from "../Layout/Explanation";
import { Main } from "../Layout/Main";
import { Table } from "../Layout/Table";
import { TablesCollection } from "../Layout/TablesCollection";

const Page: React.FC = () => {
  const columnHeadings = ["Time", "Distance"];
  return (
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
            <h1>Units</h1>
            <p>5,280' = 1 mile</p>
          </article>
          <article>
            <h1>Example Speeds</h1>
            <Table
              caption="Slow character at&nbsp;full&nbsp;speed"
              columnHeadings={columnHeadings}
              body={[
                ["1 round", "40'"],
                ["1 minute", "400'"],
              ]}
            />
            <Table
              caption="Average character at&nbsp;full&nbsp;speed"
              columnHeadings={columnHeadings}
              body={[
                ["1 round", "120'"],
                ["1 minute", "1,200'"],
              ]}
            />
            <Table
              caption="Super&nbsp;fast&nbsp;character at&nbsp;full&nbsp;speed"
              columnHeadings={columnHeadings}
              body={[
                ["1 round", "200'"],
                ["1 minute", "2,000'"],
              ]}
            />
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
};

export default Page;
