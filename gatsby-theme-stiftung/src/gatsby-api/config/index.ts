/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import settings from "./settings"

const siteMetadata = settings.meta
import { plugins, linterPlugins } from "./plugins"

const config = options => {
  return {
    siteMetadata,
    plugins: [...plugins],
  }
}

export default config
