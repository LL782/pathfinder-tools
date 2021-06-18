import React from "react";

interface Props {
  body?: String[][];
  caption: String;
  columnHeadings?: String[];
}

export const Table = ({
  body = [
    ["Example one", "1"],
    ["Example two", "2"],
  ],
  caption = "Table caption",
  columnHeadings = ["Column 1", "Column 2"],
}: Props) => (
  <>
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columnHeadings.map((heading) => (
            <th scope="col">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map(([key, vaue]) => (
          <tr key={`${key}`}>
            <th scope="row">{key}</th>
            <td>{vaue}</td>
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
