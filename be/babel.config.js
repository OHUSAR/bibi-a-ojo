module.exports = (api) => {
  api.cache(false);

  return {
    presets: ["@babel/typescript", ["@babel/env", { targets: { node: "14" } }]],
    plugins: ["inline-json-import", "@babel/transform-runtime"],
  };
};
