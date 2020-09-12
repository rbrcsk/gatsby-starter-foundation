import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"
import { BlogListPageTemplateContext } from "../types"
import { IndexPagination } from "../components/organisms/IndexPagination"

export const blogListQuery = graphql`
  query BlogListPage($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogListPageTemplate = ({
  data,
  pageContext,
}: PageProps<
  GatsbyTypes.BlogListPageQuery,
  BlogListPageTemplateContext
>): JSX.Element => {
  const { currentPage, numPages } = pageContext
  const blogSlug = "/blog/"
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
  const nextPage = blogSlug + (currentPage + 1).toString()

  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter?.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

  return (
    <Layout page>
      <SEO
        title={"Blog — Page " + currentPage + " of " + numPages}
        description={
          "Stackrole base blog page " + currentPage + " of " + numPages
        }
      />
      <h1>Blog</h1>
      <div className="grids col-1 sm-2 lg-3">{posts}</div>
      <IndexPagination
        {...{
          isFirst,
          prevPage,
          numPages,
          blogSlug,
          currentPage,
          isLast,
          nextPage,
        }}
      />
    </Layout>
  )
}

export default BlogListPageTemplate
