import {
  oneStepRemovedFrom,
  twoStepsRemovedFrom,
  threeStepsRemovedFrom,
  fourStepsRemovedFrom,
} from "./alignmentRelations";

describe("Alignments one step removed", () => {
  describe.each([
    ["Lawful Good", "Lawful Neutral", "Neutral Good"],
    ["Lawful Evil", "Lawful Neutral", "Neutral Evil"],
    ["Chaotic Good", "Chaotic Neutral", "Neutral Good"],
    ["Chaotic Evil", "Chaotic Neutral", "Neutral Evil"],
  ])("There are two for %s", (original, a, b) => {
    test(`${a} and ${b}`, () => {
      const result = oneStepRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result.length).toBe(2);
    });
  });
  describe.each([
    ["Neutral Good", "Lawful Good", "True Neutral", "Chaotic Good"],
    ["Neutral Evil", "Lawful Evil", "True Neutral", "Chaotic Evil"],
    ["Lawful Neutral", "Lawful Good", "True Neutral", "Lawful Evil"],
    ["Chaotic Neutral", "Chaotic Good", "True Neutral", "Chaotic Evil"],
  ])("There are three for %s", (original, a, b, c) => {
    test(`${a}, ${b} and ${c}`, () => {
      const result = oneStepRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result).toContain(c);
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
  ])("There are four for %s", (original, a, b, c, neighbour4) => {
    test(`${a}, ${b}, ${c} and ${neighbour4}`, () => {
      const result = oneStepRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result).toContain(c);
      expect(result).toContain(neighbour4);
      expect(result.length).toBe(4);
    });
  });
});

describe("Alignments two steps removed", () => {
  describe.each([
    ["Lawful Good", "Lawful Evil", "True Neutral", "Chaotic Good"],
    ["Lawful Evil", "Lawful Good", "True Neutral", "Chaotic Evil"],
    ["Chaotic Good", "Lawful Good", "True Neutral", "Chaotic Evil"],
    ["Chaotic Evil", "Chaotic Good", "True Neutral", "Lawful Evil"],
  ])("There are three for %s", (original, a, b, c) => {
    test(`${a}, ${b} and ${c}`, () => {
      const result = twoStepsRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result).toContain(c);
      expect(result.length).toBe(3);
    });
  });
  describe.each([
    ["Neutral Good", "Neutral Evil", "Lawful Neutral", "Chaotic Neutral"],
    ["Neutral Evil", "Lawful Neutral", "Chaotic Neutral", "Neutral Good"],
    ["Lawful Neutral", "Chaotic Neutral", "Neutral Good", "Neutral Evil"],
    ["Chaotic Neutral", "Neutral Good", "Neutral Evil", "Lawful Neutral"],
  ])("There are three for %s", (original, a, b, c) => {
    test(`${a}, ${b} and ${c}`, () => {
      const result = twoStepsRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result).toContain(c);
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
  ])("There are four for %s", (original, a, b, c, neighbour4) => {
    test(`${a}, ${b}, ${c} and ${neighbour4}`, () => {
      const result = twoStepsRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result).toContain(c);
      expect(result).toContain(neighbour4);
      expect(result.length).toBe(4);
    });
  });
});

describe("Alignments three steps removed", () => {
  describe.each([
    ["Lawful Good", "Chaotic Neutral", "Neutral Evil"],
    ["Lawful Evil", "Neutral Good", "Chaotic Neutral"],
    ["Chaotic Good", "Lawful Neutral", "Neutral Evil"],
    ["Chaotic Evil", "Neutral Good", "Lawful Neutral"],
  ])("There are two for %s", (original, a, b) => {
    test(`${a} and ${b}`, () => {
      const result = threeStepsRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result.length).toBe(2);
    });
  });
  describe.each([
    ["Neutral Good", "Chaotic Evil", "Lawful Evil"],
    ["Neutral Evil", "Lawful Good", "Chaotic Good"],
    ["Lawful Neutral", "Chaotic Evil", "Chaotic Good"],
    ["Chaotic Neutral", "Lawful Good", "Lawful Evil"],
  ])("There are two for %s", (original, a, b) => {
    test(`${a} and ${b}`, () => {
      const result = threeStepsRemovedFrom(original);
      expect(result).toContain(a);
      expect(result).toContain(b);
      expect(result.length).toBe(2);
    });
  });
  test("There are none for True Neutral", () => {
    const result = threeStepsRemovedFrom("True Neutral");
    expect(result.length).toBe(0);
  });
});

describe("Alignments four steps removed", () => {
  describe.each([
    ["Lawful Good", "Chaotic Evil"],
    ["Lawful Evil", "Chaotic Good"],
    ["Chaotic Good", "Lawful Evil"],
    ["Chaotic Evil", "Lawful Good"],
  ])("There is one for %s", (original, opposite) => {
    test(`${opposite}`, () => {
      const result = fourStepsRemovedFrom(original);
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
  ])("There are none for %s", (original) => {
    const result = fourStepsRemovedFrom(original);
    expect(result.length).toBe(0);
  });
});
