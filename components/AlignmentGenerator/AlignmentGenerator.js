const AlignmentGenerator = ({ alignmentName = "Lawful Good" }) => {
  const lawChaos = ["L", "N", "C"];
  const goodEvil = ["G", "N", "E"];

  const nameToShortName = (name) => name[0];

  const myLawChaos = (() => {
    const [a] = alignmentName.split(" ");
    const shortName = nameToShortName(a);
    const number = shortName === "L" ? 0 : shortName === "C" ? 2 : 1;
    return number;
  })();
  const myGoodEvil = (() => {
    const [a, b] = alignmentName.split(" ");
    const shortName = nameToShortName(b);
    const number = shortName === "G" ? 0 : shortName === "E" ? 2 : 1;
    return number;
  })();

  const getRelated = (n) => (n === 0 ? 1 : n === 2 ? 1 : "TODO");
  const getOpposite = (n) => (n === 0 ? 2 : n === 2 ? 0 : "TODO");
  // TODO: generate per neutral tables

  const homeAlignment = [`${lawChaos[myLawChaos]}${goodEvil[myGoodEvil]}`];
  const related = [
    `${lawChaos[myLawChaos]}${goodEvil[getRelated(myGoodEvil)]}`,
    `${lawChaos[getRelated(myLawChaos)]}${goodEvil[myGoodEvil]}`,
  ];
  const adjacent = [
    `${lawChaos[getRelated(myLawChaos)]}${goodEvil[getRelated(myGoodEvil)]}`,
  ];
  const distant = [
    `${lawChaos[getOpposite(myLawChaos)]}${goodEvil[myGoodEvil]}`,
    `${lawChaos[myLawChaos]}${goodEvil[getOpposite(myGoodEvil)]}`,
    `${lawChaos[getOpposite(myLawChaos)]}${goodEvil[getRelated(myGoodEvil)]}`,
    `${lawChaos[getRelated(myLawChaos)]}${goodEvil[getOpposite(myGoodEvil)]}`,
  ];
  const opposed = [
    `${lawChaos[getOpposite(myLawChaos)]}${goodEvil[getOpposite(myGoodEvil)]}`,
  ];

  const alignments = homeAlignment.concat(related, adjacent, distant, opposed);

  const chances = [23, 16, 16, 11, 6, 6, 6, 6, 1];

  let max = 100;

  const alignmentChances = alignments.map((a, i) => {
    const bottom = max - chances[i];
    const top = max;
    max = bottom - 1;
    return [a, `${bottom}-${top}%`];
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
