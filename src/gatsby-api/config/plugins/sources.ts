const staticAssetsSource = {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/../../../../static/assets/`,
    name: `assets`,
  },
}

const contentSource = {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/../../../../src/content/`,
    name: `content`,
  },
}

export const sourcePlugins = [staticAssetsSource, contentSource]
