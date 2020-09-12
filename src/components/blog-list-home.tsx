import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"
import { Composition } from "atomic-layout"
import styled from "styled-components"
import { IconWrapper, LinkButton } from "./atoms"

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

const BlogPostCardCompositionWrapper = styled.div`
  padding-bottom: 30px;
`

const BlogListHomeWrapper = styled.section`
  padding-bottom: 100px;
`

const BlogListHome = (): JSX.Element => {
  const data = useStaticQuery<GatsbyTypes.HomePageBlogPreviewListQuery>(query)

  return (
    <BlogListHomeWrapper>
      <h2>
        Latest in <strong>Blog</strong>{" "}
        <IconWrapper>
          <RiArrowDownLine />
        </IconWrapper>
      </h2>

      <BlogPostCardCompositionWrapper>
        <Composition
          templateCols="repeat(1, 1fr)"
          templateColsSm="repeat(2, 1fr)"
          templateColsLg="repeat(3, 1fr)"
          gap={30}
        >
          {data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter?.date)
            .map(edge => (
              <PostCard key={edge.node.id} data={edge.node} />
            ))}
        </Composition>
      </BlogPostCardCompositionWrapper>
      <LinkButton to="/blog">
        See more
        <IconWrapper>
          <RiArrowRightSLine />
        </IconWrapper>
      </LinkButton>
    </BlogListHomeWrapper>
  )
}

export default BlogListHome
