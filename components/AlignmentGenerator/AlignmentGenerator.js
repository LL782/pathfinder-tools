import {
  oneStepRemovedFrom,
  twoStepsRemovedFrom,
  threeStepsRemovedFrom,
  fourStepsRemovedFrom,
} from "../alignmentRelations";
import toInitials from "../toInitials";

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

const AlignmentGenerator = ({ alignment = "Lawful Good", dominance = 10 }) => {
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

  // TODO: perform a random role

  return (
    <>
      <table>
        <caption>{alignment} territory</caption>
        <thead>
          <tr>
            <th scope="col">Alignment</th>
            <th scope="col">Percentage range</th>
          </tr>
        </thead>
        <tbody>
          {alignmentChances.map(([a, chance]) => (
            <tr key={`${alignment}_${a}`}>
              <th scope="row">{a}</th>
              <td>{chance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        table {
          margin: 5px;
        }
        thead,
        tfoot {
          background-color: #3f87a6;
          color: #fff;
        }

        tbody {
          background-color: #e4f0f5;
        }

        caption {
          padding: 10px;
          caption-side: bottom;
        }

        table {
          border-collapse: collapse;
          border: 2px solid rgb(200, 200, 200);
          letter-spacing: 1px;
          font-family: sans-serif;
          font-size: 0.8rem;
        }

        td,
        th {
          border: 1px solid rgb(190, 190, 190);
          padding: 5px 10px;
        }

        td {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default AlignmentGenerator;
