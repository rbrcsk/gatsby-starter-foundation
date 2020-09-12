import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const dummyQuery = graphql`
  query GatsbyNodeBlogPostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            slug
            template
            title
          }
        }
      }
    }
  }
`

const DummyBlogList = (): JSX.Element | null => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const q = useStaticQuery(dummyQuery)

  return <></>
}

export default DummyBlogList
