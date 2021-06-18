module.exports = {
  plugins: ["@babel/plugin-transform-react-jsx", "styled-jsx/babel"],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
