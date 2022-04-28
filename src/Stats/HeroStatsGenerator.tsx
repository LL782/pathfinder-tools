import React, { useEffect, useState } from "react";

import { heroStatsGenerator } from "../pages/api/dice/hero-stats-generator";

import { Table } from "../Layout/Table";

export const HeroStatsGenerator = () => {
  const { columnHeadings } = heroStatsGenerator().tableFormat;

  const [body, setTableBody] = useState([]);
  const [results, setResults] = useState(null);

  const updateResults = () => {
    const { raw, tableFormat } = heroStatsGenerator();
    setTableBody(tableFormat.tableBody);
    setResults(raw.map(({ result }) => result).join(", "));
  };

  useEffect(updateResults, []);

  return (
    <>
      <h3>Roll Hero Strength Stats</h3>
      <button onClick={updateResults}>Roll 3d6 six times. Keep highest</button>
      {results && (
        <>
          <p>Results: {results}</p>
          <Table
            caption="3d6 six times. Keep highest"
            columnHeadings={columnHeadings}
            tableBody={body}
          ></Table>
        </>
      )}
      <h4>Prefer your data raw?</h4>
      <p>
        The endpoint is at:{" "}
        <a href="/api/dice/hero-stats-generator">
          /api/dice/hero-stats-generator
        </a>
      </p>
    </>
  );
};
