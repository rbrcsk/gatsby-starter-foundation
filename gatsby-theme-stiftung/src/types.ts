export interface BlogListPageTemplateContext {
  limit: number
  skip: number
  numPages: number
  currentPage: number
}

export interface BlogPostPageTemplateContext {
  next?: GatsbyTypes.GatsbyNodeBlogPostListQuery["allMarkdownRemark"]["edges"][0]["node"]
  previous?: GatsbyTypes.GatsbyNodeBlogPostListQuery["allMarkdownRemark"]["edges"][0]["node"]
}

export type GatsbyNodeBlogPostListQuery = GatsbyTypes.GatsbyNodeBlogPostListQuery

import type { PluginOptions as TypegenPluginOptions } from "gatsby-plugin-typegen/types"

export type GatsbyPlugin =
  | string
  | { resolve: string; options: Record<string, unknown> }
  | { resolve: `gatsby-plugin-typegen`; options: TypegenPluginOptions }
