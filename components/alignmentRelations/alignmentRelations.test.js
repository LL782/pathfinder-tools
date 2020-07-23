import {
  neighboursFor,
  relationsFor,
  unrelatedFrom,
  oppositeFor,
} from "./alignmentRelations";

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

describe("Related alignments", () => {
  describe.each([
    ["Lawful Good", "Lawful Evil", "True Neutral", "Chaotic Good"],
    ["Lawful Evil", "Lawful Good", "True Neutral", "Chaotic Evil"],
    ["Chaotic Good", "Lawful Good", "True Neutral", "Chaotic Evil"],
    ["Chaotic Evil", "Chaotic Good", "True Neutral", "Lawful Evil"],
  ])("There are three for %s", (home, neighbour1, neighbour2, neighbour3) => {
    test(`${neighbour1}, ${neighbour2} and ${neighbour3}`, () => {
      const result = relationsFor(home);
      expect(result).toContain(neighbour1);
      expect(result).toContain(neighbour2);
      expect(result).toContain(neighbour3);
      expect(result.length).toBe(3);
    });
  });
  describe.each([
    ["Neutral Good", "Neutral Evil", "Lawful Neutral", "Chaotic Neutral"],
    ["Neutral Evil", "Lawful Neutral", "Chaotic Neutral", "Neutral Good"],
    ["Lawful Neutral", "Chaotic Neutral", "Neutral Good", "Neutral Evil"],
    ["Chaotic Neutral", "Neutral Good", "Neutral Evil", "Lawful Neutral"],
  ])("There are three for %s", (home, neighbour1, neighbour2, neighbour3) => {
    test(`${neighbour1}, ${neighbour2} and ${neighbour3}`, () => {
      const result = relationsFor(home);
      expect(result).toContain(neighbour1);
      expect(result).toContain(neighbour2);
      expect(result).toContain(neighbour3);
      expect(result.length).toBe(3);
    });
  });
  describe.each([
    [
      "True Neutral",
      "Lawful Good",
      "Lawful Evil",
      "Chaotic Good",
      "Chaotic Evil",
    ],
  ])(
    "There are four for %s",
    (home, neighbour1, neighbour2, neighbour3, neighbour4) => {
      test(`${neighbour1}, ${neighbour2}, ${neighbour3} and ${neighbour4}`, () => {
        const result = relationsFor(home);
        expect(result).toContain(neighbour1);
        expect(result).toContain(neighbour2);
        expect(result).toContain(neighbour3);
        expect(result).toContain(neighbour4);
        expect(result.length).toBe(4);
      });
    }
  );
});

describe("Unrelated alignments", () => {
  describe.each([
    ["Lawful Good", "Chaotic Neutral", "Neutral Evil"],
    ["Lawful Evil", "Neutral Good", "Chaotic Neutral"],
    ["Chaotic Good", "Lawful Neutral", "Neutral Evil"],
    ["Chaotic Evil", "Neutral Good", "Lawful Neutral"],
  ])("There are two for %s", (home, neighbour1, neighbour2) => {
    test(`${neighbour1} and ${neighbour2}`, () => {
      const result = unrelatedFrom(home);
      expect(result).toContain(neighbour1);
      expect(result).toContain(neighbour2);
      expect(result.length).toBe(2);
    });
  });
  describe.each([
    ["Neutral Good", "Chaotic Evil", "Lawful Evil"],
    ["Neutral Evil", "Lawful Good", "Chaotic Good"],
    ["Lawful Neutral", "Chaotic Evil", "Chaotic Good"],
    ["Chaotic Neutral", "Lawful Good", "Lawful Evil"],
  ])("There are two for %s", (home, neighbour1, neighbour2) => {
    test(`${neighbour1} and ${neighbour2}`, () => {
      const result = unrelatedFrom(home);
      expect(result).toContain(neighbour1);
      expect(result).toContain(neighbour2);
      expect(result.length).toBe(2);
    });
  });
  test("There are none for True Neutral", () => {
    const result = unrelatedFrom("True Neutral");
    expect(result.length).toBe(0);
  });
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
