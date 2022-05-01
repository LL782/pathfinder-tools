import { useInitialLetters } from "./useInitialLetters";

describe("useInitialLetters", () => {
  test("turns a word into a letter", () => {
    expect(useInitialLetters("Test")).toBe("T");
    expect(useInitialLetters("Foo")).toBe("F");
  });
  test("turns multiple words initial letters", () => {
    expect(useInitialLetters("Test String")).toBe("TS");
    expect(useInitialLetters("Longer Test String")).toBe("LTS");
  });
  test("ensures lower case words become upper case initials", () => {
    expect(useInitialLetters("t")).toBe("T");
    expect(useInitialLetters("the lower Upper mix")).toBe("TLUM");
  });
  test("has no trouble with duplicate spaces between words", () => {
    expect(useInitialLetters("A  B    C")).toBe("ABC");
  });
});
