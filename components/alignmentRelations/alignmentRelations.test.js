import { neighboursFor, oppositeFor } from "./alignmentRelations";

describe("Neighbouring alignments", () => {
  describe.each([
    ["Lawful Good", "Lawful Neutral", "Neutral Good"],
    ["Lawful Evil", "Lawful Neutral", "Neutral Evil"],
    ["Chaotic Good", "Chaotic Neutral", "Neutral Good"],
    ["Chaotic Evil", "Chaotic Neutral", "Neutral Evil"],
  ])("There are two for %s", (home, neighbour1, neighbour2) => {
    test(`${neighbour1} and ${neighbour2}`, () => {
      const result = neighboursFor(home);
      expect(result).toContain(neighbour1);
      expect(result).toContain(neighbour2);
      expect(result.length).toBe(2);
    });
  });
  describe.each([
    ["Neutral Good", "Lawful Good", "True Neutral", "Chaotic Good"],
    ["Neutral Evil", "Lawful Evil", "True Neutral", "Chaotic Evil"],
    ["Lawful Neutral", "Lawful Good", "True Neutral", "Lawful Evil"],
    ["Chaotic Neutral", "Chaotic Good", "True Neutral", "Chaotic Evil"],
  ])("There are three for %s", (home, neighbour1, neighbour2, neighbour3) => {
    test(`${neighbour1}, ${neighbour2} and ${neighbour3}`, () => {
      const result = neighboursFor(home);
      expect(result).toContain(neighbour1);
      expect(result).toContain(neighbour2);
      expect(result).toContain(neighbour3);
      expect(result.length).toBe(3);
    });
  });
  describe.each([
    [
      "True Neutral",
      "Neutral Good",
      "Neutral Evil",
      "Lawful Neutral",
      "Chaotic Neutral",
    ],
  ])(
    "There are four for %s",
    (home, neighbour1, neighbour2, neighbour3, neighbour4) => {
      test(`${neighbour1}, ${neighbour2}, ${neighbour3} and ${neighbour4}`, () => {
        const result = neighboursFor(home);
        expect(result).toContain(neighbour1);
        expect(result).toContain(neighbour2);
        expect(result).toContain(neighbour3);
        expect(result).toContain(neighbour4);
        expect(result.length).toBe(4);
      });
    }
  );
});

describe("Opposite alignments", () => {
  describe.each([
    ["Lawful Good", "Chaotic Evil"],
    ["Lawful Evil", "Chaotic Good"],
    ["Chaotic Good", "Lawful Evil"],
    ["Chaotic Evil", "Lawful Good"],
  ])("There is one for %s", (home, opposite) => {
    test(`${opposite}`, () => {
      const result = oppositeFor(home);
      expect(result).toContain(opposite);
      expect(result.length).toBe(1);
    });
  });
  test.each([
    "Neutral Good",
    "Neutral Evil",
    "Lawful Neutral",
    "Chaotic Neutral",
    "True Neutral",
  ])("There are none for %s", (home) => {
    const result = oppositeFor(home);
    expect(result.length).toBe(0);
  });
});
