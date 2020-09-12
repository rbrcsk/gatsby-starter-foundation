const styleLint = {
  resolve: "@danbruegge/gatsby-plugin-stylelint",
  options: { files: ["**/*.{js,jsx,ts,tsx}"] },
}

const esLint = {
  resolve: "gatsby-plugin-eslint",
  options: {
    test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
    exclude: /(node_modules|.cache|public)/,
    stages: ["develop", "build-javascript"],
    options: {
      emitWarning: true,
      failOnError: true,
    },
  },
}

export const linterPlugins = [styleLint, esLint]
