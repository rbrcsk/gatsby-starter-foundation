import path from "path"

const staticAssetsSource = {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: path.resolve(`static/assets/`),
    name: `assets`,
  },
}

const contentSource = {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: path.resolve(`content/`),
    name: `content`,
  },
}

export const sourcePlugins = [staticAssetsSource, contentSource]
