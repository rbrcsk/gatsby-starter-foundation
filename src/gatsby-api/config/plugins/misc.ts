import { off } from "process"
import settings from "../settings"

const typeGen = {
  resolve: `gatsby-plugin-typegen`,
  options: {
    outputPath: `src/__generated__/gatsby-types.d.ts`,
    emitSchema: {
      "src/__generated__/gatsby-introspection.json": true,
    },
    emitPluginDocuments: {
      "src/__generated__/gatsby-plugin-documents.graphql": true,
    },
  },
}

const reactHelmet = `gatsby-plugin-react-helmet`
const netlifyCMS = `gatsby-plugin-netlify-cms`
const googleAnalytics = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: settings.ga,
  },
}
const siteMap = `gatsby-plugin-advanced-sitemap`
const manifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Foundation`,
    short_name: `Foundation`,
    start_url: `/`,
    background_color: `#f7f0eb`,
    theme_color: `#a2466c`,
    display: `standalone`,
    icon: `static/assets/stackrole.png`,
  },
}
const offline = `gatsby-plugin-offline`

export const miscPlugins = [
  typeGen,
  reactHelmet,
  netlifyCMS,
  googleAnalytics,
  siteMap,
  manifest,
  offline,
]
