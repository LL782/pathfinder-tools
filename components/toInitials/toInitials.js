const toInitials = (s) =>
  s
    .split(" ")
    .map((w) => w[0])
    .reduce((a, b) => `${a}${b}`, "");

export default toInitials;
