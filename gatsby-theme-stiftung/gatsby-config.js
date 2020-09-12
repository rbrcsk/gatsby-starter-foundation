// We register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other .js file. It automatically reads TypeScript config from
// tsconfig.json.
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({ project: "./tsconfig.gatsby.json" })

// Use a TypeScript version of gatsby-config.js.
module.exports = require("./src/gatsby-api/config")
