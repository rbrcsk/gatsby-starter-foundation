const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const imageTransformerPlugins = [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
]

const markdownTransformer = {
  resolve: `gatsby-transformer-remark`,
  options: {
    gfm: true,
    plugins: [
      netlifyCmsPaths,
      `gatsby-remark-reading-time`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1024,
          showCaptions: true,
          linkImagesToOriginal: false,
          tracedSVG: true,
          loading: "lazy",
        },
      },
      `gatsby-remark-responsive-iframe`,
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false,
          noInlineHighlight: false,
          // By default the HTML entities <>&'" are escaped.
          // Add additional HTML escapes by providing a mapping
          // of HTML entities and their escape value IE: { '}': '&#123;' }
          escapeEntities: {},
        },
      },
    ],
  },
}

export const transformerPlugins = [
  markdownTransformer,
  ...imageTransformerPlugins,
]
