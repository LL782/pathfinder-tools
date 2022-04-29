import React from "react";

import { RandomAlignmentTable } from "./RandomAlignmentTable";
import { TablesCollection } from "../Layout/TablesCollection";

const d = 10;

export const RandomAlignmentTables = () => (
  <TablesCollection>
    <RandomAlignmentTable alignment="Lawful Good" dominance={d} />
    <RandomAlignmentTable alignment="Neutral Good" dominance={d} />
    <RandomAlignmentTable alignment="Chaotic Good" dominance={d} />
    <RandomAlignmentTable alignment="Lawful Neutral" dominance={d} />
    <RandomAlignmentTable alignment="True Neutral" dominance={d} />
    <RandomAlignmentTable alignment="Chaotic Neutral" dominance={d} />
    <RandomAlignmentTable alignment="Lawful Evil" dominance={d} />
    <RandomAlignmentTable alignment="Neutral Evil" dominance={d} />
    <RandomAlignmentTable alignment="Chaotic Evil" dominance={d} />
  </TablesCollection>
);
