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
        body={[
          [
            "17",
            "6, 6, 5",
            "6, 6, 5 //  6, 6, 5 //  6, 6, 5 //  6, 6, 5 //  6, 6, 5 //  6, 6, 5 ",
          ],
        ]}
      ></Table>
    </>
  );
};
