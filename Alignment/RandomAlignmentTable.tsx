import React from "react";

import {
  oneStepRemovedFrom,
  twoStepsRemovedFrom,
  threeStepsRemovedFrom,
  fourStepsRemovedFrom,
} from "./alignmentRelations";

import toInitials from "../Formatting/toInitials";
import { Table } from "../Layout/Table";

const numberOfAlignments = 9;
const baseChance = (100 - numberOfAlignments) / numberOfAlignments;

const addStepsRemoved = (stepsRemoved) => (alignment) => ({
  alignment,
  stepsRemoved,
});

const getMeanStepsRemoved = (alignments) => {
  const stepsRemoved = alignments.map(({ stepsRemoved }) => stepsRemoved);
  const sum = stepsRemoved.reduce((a, b) => (a || 0) + b);
  return sum / alignments.length;
};

const formatAlignment = toInitials;
const formatChance = (topOfRange, bottomOfRange) => {
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
  const near = oneStepRemovedFrom(alignment).map(addStepsRemoved(1));
  const mid = twoStepsRemovedFrom(alignment).map(addStepsRemoved(2));
  const far = threeStepsRemovedFrom(alignment).map(addStepsRemoved(3));
  const opposite = fourStepsRemovedFrom(alignment).map(addStepsRemoved(4));

  const alignments = base.concat(near, mid, far, opposite);

  const extremism = getMeanStepsRemoved(alignments);
  const adheranceToTheBase = dominance / extremism;

  const getDeviation = ({ stepsRemoved }) =>
    (extremism - stepsRemoved) * adheranceToTheBase;

  let maxChance = 100;

  const alignmentChances = alignments.map((a) => {
    const { alignment, stepsRemoved } = a;
    const deviation = getDeviation({ stepsRemoved });
    const chance = baseChance + deviation;
    const topOfRange = maxChance;
    const bottomOfRange = maxChance - chance;

    const formattedResult = [
      formatAlignment(alignment),
      formatChance(topOfRange, bottomOfRange),
    ];

    maxChance = bottomOfRange - 1;

    return formattedResult;
  });

  return (
    <Table baseAlignment={alignment} alignmentChances={alignmentChances} />
  );
};
