import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const query = graphql`
  query HomePageBlogPreviewList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
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

const BlogListHome = (): JSX.Element => {
  const data = useStaticQuery<GatsbyTypes.HomePageBlogPreviewListQuery>(query)

  return (
    <section className="home-posts">
      <h2>
        Latest in <strong>Blog</strong>{" "}
        <span className="icon -right">
          <RiArrowDownLine />
        </span>
      </h2>
      <div className="grids col-1 sm-2 lg-3">
        {data.allMarkdownRemark.edges
          .filter(edge => !!edge.node.frontmatter?.date)
          .map(edge => (
            <PostCard key={edge.node.id} data={edge.node} />
          ))}
      </div>
      <Link className="button" to="/blog">
        See more
        <span className="icon -right">
          <RiArrowRightSLine />
        </span>
      </Link>
    </section>
  )
}

export default BlogListHome
