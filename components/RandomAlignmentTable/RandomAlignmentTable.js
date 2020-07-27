import React from "react";

const RandomAlignmentTable = ({ baseAlignment, alignmentChances }) => (
  <>
    <table>
      <caption>{baseAlignment} territory</caption>
      <thead>
        <tr>
          <th scope="col">Alignment</th>
          <th scope="col">Percentage range</th>
        </tr>
      </thead>
      <tbody>
        {alignmentChances.map(([alignment, chance]) => (
          <tr key={`${alignment}`}>
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

export default RandomAlignmentTable;
