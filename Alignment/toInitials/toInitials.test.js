import toInitials from "./toInitials";

describe("toInitials", () => {
  test("turns a single word into it's first letter", () => {
    expect(toInitials("Test")).toBe("T");
  });
  test("turns multiple words into just their initial letters", () => {
    expect(toInitials("Test String")).toBe("TS");
    expect(toInitials("Longer Test String")).toBe("LTS");
  });
});
