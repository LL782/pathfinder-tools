import {
  neighboursFor,
  relationsFor,
  unrelatedFrom,
  oppositeFor,
} from "../alignmentRelations";
import toInitials from "../toInitials";

const AlignmentGenerator = ({ alignmentName = "Lawful Good" }) => {
  const home = [alignmentName];
  const neighbours = neighboursFor(alignmentName);
  const relations = relationsFor(alignmentName);
  const unrelations = unrelatedFrom(alignmentName);
  const opposites = oppositeFor(alignmentName);

  const alignments = home.concat(neighbours, relations, unrelations, opposites);

  const chances = [23, 16, 16, 11, 6, 6, 6, 6, 1];

  let max = 100;

  const alignmentChances = alignments.map((alignmentName, i) => {
    const bottom = max - chances[i];
    const top = max;
    max = bottom - 1;
    return [toInitials(alignmentName), `${bottom}-${top}%`];
  });

  // TODO: perform a random role

  return (
    <>
      <table>
        <caption>{alignmentName} territory</caption>
        <thead>
          <tr>
            <th scope="col">Alignment</th>
            <th scope="col">Percentage range</th>
          </tr>
        </thead>
        <tbody>
          {alignmentChances.map(([alignment, chance]) => (
            <tr key={`${alignmentName}_${alignment}`}>
              <th scope="row">{alignment}</th>
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
