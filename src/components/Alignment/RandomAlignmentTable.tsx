import {
  oneStepRemovedFrom,
  twoStepsRemovedFrom,
  threeStepsRemovedFrom,
  fourStepsRemovedFrom,
} from "./alignmentRelations";

import { Table } from "../Layout/Table";
import { useInitialLetters } from "../../hooks/TextFormatting/useInitialLetters";

const numberOfAlignments = 9;
const baseChance = (100 - numberOfAlignments) / numberOfAlignments;

const addStepsRemoved = (stepsRemoved: number) => (alignment: string) => ({
  alignment,
  stepsRemoved,
});

const getMeanStepsRemoved = (
  alignments: Array<{ alignment: string; stepsRemoved: number }>
) => {
  const stepsRemoved = alignments.map(
    ({ stepsRemoved }: { stepsRemoved: number }) => stepsRemoved
  );
  const sum = stepsRemoved.reduce((a: number, b: number) => (a || 0) + b);
  return sum / alignments.length;
};

const formatChance = (topOfRange: number, bottomOfRange: number) => {
  topOfRange = topOfRange > 0 ? Math.round(topOfRange) : 0;
  bottomOfRange = bottomOfRange > 1 ? Math.round(bottomOfRange) : 1;
  if (topOfRange === 0) {
    bottomOfRange = 0;
  }
  return topOfRange === bottomOfRange
    ? `${topOfRange}%`
    : `${bottomOfRange}-${topOfRange}%`;
};

export const RandomAlignmentTable = ({
  alignment = "Lawful Good",
  dominance = 10,
}) => {
  const base = [{ alignment, stepsRemoved: 0 }];
  const near = oneStepRemovedFrom(alignment)!.map(addStepsRemoved(1));
  const mid = twoStepsRemovedFrom(alignment)!.map(addStepsRemoved(2));
  const far = threeStepsRemovedFrom(alignment).map(addStepsRemoved(3));
  const opposite = fourStepsRemovedFrom(alignment).map(addStepsRemoved(4));

  const alignments = base.concat(near, mid, far, opposite);

  const extremism = getMeanStepsRemoved(alignments);
  const adheranceToTheBase = dominance / extremism;

  const getDeviation = ({ stepsRemoved }: { stepsRemoved: number }) =>
    (extremism - stepsRemoved) * adheranceToTheBase;

  const columns = ["Alignment", "Percentage chance"];

  let maxChance = 100;

  const alignmentChances: string[][] = alignments.map((a) => {
    const { alignment, stepsRemoved } = a;
    const deviation = getDeviation({ stepsRemoved });
    const chance = baseChance + deviation;
    const topOfRange = maxChance;
    const bottomOfRange = maxChance - chance;

    const formattedResult = [
      useInitialLetters(alignment),
      formatChance(topOfRange, bottomOfRange),
    ];

    maxChance = bottomOfRange - 1;

    return formattedResult;
  });

  return (
    <Table
      tableBody={alignmentChances}
      caption={`${alignment} territory`}
      columnHeadings={columns}
    />
  );
};
