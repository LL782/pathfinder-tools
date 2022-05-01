const useInitialLetters = (words: string) =>
  words
    .split(/\s+/g)
    .map((w) => w[0])
    .map((i) => i.toUpperCase())
    .reduce((a, b) => `${a}${b}`, "");

export { useInitialLetters };
