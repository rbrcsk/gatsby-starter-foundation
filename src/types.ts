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
