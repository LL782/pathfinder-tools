import Head from "next/head";

import AlignmentGenerator from "../components/AlignmentGenerator";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LL782 Pathfinder Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AlignmentGenerator alignmentName="Lawful Good" />
        <AlignmentGenerator alignmentName="Chaotic Good" />
        <AlignmentGenerator alignmentName="Lawful Evil" />
        <AlignmentGenerator alignmentName="Chaotic Evil" />
      </main>
    </div>
  );
}
