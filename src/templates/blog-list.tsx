import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"
import { BlogListPageTemplateContext } from "../types"

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

interface PaginationProps {
  isFirst: boolean
  isLast: boolean
  numPages: number
  currentPage: number
  blogSlug: string
  prevPage: string
  nextPage: string
}

const Pagination = (props: PaginationProps) => (
  <div className="pagination">
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

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
    <Layout className="blog-page">
      <SEO
        title={"Blog — Page " + currentPage + " of " + numPages}
        description={
          "Stackrole base blog page " + currentPage + " of " + numPages
        }
      />
      <h1>Blog</h1>
      <div className="grids col-1 sm-2 lg-3">{posts}</div>
      <Pagination
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
