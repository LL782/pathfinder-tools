import type { NextApiRequest, NextApiResponse } from "next";

import { TableBody } from "../../../Layout/Table";

type ThreeDice = [number, number, number];

interface RawStat {
  result: number;
  winningDice: ThreeDice;
  allRolls: Array<ThreeDice>;
}

export type Stats = {
  raw: Array<RawStat>;
  tableFormat: {
    columnHeadings: string[];
    tableBody: TableBody;
  };
};

const rollD6 = () => Math.round(Math.random() * (6 - 1) + 1);
const roll3D6 = (): ThreeDice => [rollD6(), rollD6(), rollD6()];
const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

const keepHighestTotal = (bestAttempt, attempt) => {
  return sum(attempt) > sum(bestAttempt) ? attempt : bestAttempt;
};

const rollHeroStat = (): RawStat => {
  const allRolls = [
    roll3D6(),
    roll3D6(),
    roll3D6(),
    roll3D6(),
    roll3D6(),
    roll3D6(),
  ];

  const winningDice: ThreeDice = allRolls.reduce(keepHighestTotal, [0, 0, 0]);

  return {
    allRolls,
    result: sum(winningDice),
    winningDice,
  };
};

const rollHeroStats = (): Stats["raw"] => [
  rollHeroStat(),
  rollHeroStat(),
  rollHeroStat(),
  rollHeroStat(),
  rollHeroStat(),
  rollHeroStat(),
];

const formatStats = (rawStat: RawStat) => {
  const allRollsFormat = rawStat.allRolls
    .map((attempt) => attempt.join(", "))
    .join(" // ");

  const winningDiceFormat = rawStat.winningDice.join(", ");

  return [rawStat.result, winningDiceFormat, allRollsFormat];
};

export const heroStatsGenerator = (): Stats => {
  const raw = rollHeroStats();

  return {
    raw,
    tableFormat: {
      columnHeadings: ["Stat", "Winning dice", "All rolls"],
      tableBody: raw.map(formatStats),
    },
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<Stats>) => {
  const stats = heroStatsGenerator();
  res.status(200).json(stats);
};

export default handler;
