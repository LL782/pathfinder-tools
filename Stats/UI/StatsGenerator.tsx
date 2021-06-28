import React from "react";

import { Table } from "../../Layout/Table";

export const StatsGenerator = () => {
  return (
    <>
      <button>Roll 3d6 six times. Keep highest</button>
      <p>Results</p>
      <Table
        caption="3d6 six times. Keep highest"
        columnHeadings={["Result", "Winning dice", "All rolls"]}
        tableBody={[
          [
            "15",
            "4, 5, 6",
            "4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 ",
          ],
          [
            "15",
            "4, 5, 6",
            "4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 ",
          ],
          [
            "15",
            "4, 5, 6",
            "4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 ",
          ],
          [
            "15",
            "4, 5, 6",
            "4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 ",
          ],
          [
            "15",
            "4, 5, 6",
            "4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 ",
          ],
          [
            "15",
            "4, 5, 6",
            "4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 //  4, 5, 6 ",
          ],
        ]}
      ></Table>
    </>
  );
};
