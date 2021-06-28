import { heroStatsGenerator, Stats } from "./hero-stats-generator";

describe("Hero Stats Generator", () => {
  describe("When called using the defaults", () => {
    const { raw, tableFormat } = heroStatsGenerator();

    describe("The formatted response", () => {
      const { columnHeadings, tableBody } = tableFormat;

      it('includes column headings "Result", "Winning dice" and "All rolls"', () => {
        expect(columnHeadings).toEqual(["Result", "Winning dice", "All rolls"]);
      });
      it("includes a tableBody with six stats", () => {
        expect(tableBody.length).toEqual(6);
      });

      it("the final results matches what comes from the raw data", () => {
        tableBody.forEach((stat, i) => {
          const [result] = stat;
          expect(result).toEqual(raw[i].result);
        });
      });
    });

    describe("And looking at the raw response of each stat", () => {
      describe.each(raw)(`#%#`, (rawStat) => {
        const { allRolls, result, winningDice } = rawStat;

        it("we roll eighteen dice", () => {
          expect(allRolls.flat().length).toBe(18);
        });
        it("all the rolls are numbers between 1 and 6", () => {
          expect(
            allRolls
              .flat()
              .every(
                (d) =>
                  d === 1 || d === 2 || d === 3 || d === 4 || d === 5 || d === 6
              )
          ).toBeTruthy();
        });
        it("the rolls are random", () => {
          expect(allRolls[0]).not.toEqual(allRolls[1]);
          expect(allRolls[2]).not.toEqual(allRolls[3]);
          expect(allRolls[4]).not.toEqual(allRolls[5]);
        });
        it(`the final result is the sum of the winning dice (e.g. ${winningDice.join(
          " + "
        )} = ${result})`, () => {
          const sum = winningDice.reduce((a, b) => a + b, 0);
          expect(result).toEqual(sum);
        });
        it(`the winning dice (${winningDice.join(
          ", "
        )}) are found amongst all the attempts`, () => {
          expect(allRolls.includes(winningDice)).toBeTruthy();
        });
      });
    });
  });
});
