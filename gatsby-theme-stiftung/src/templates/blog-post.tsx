import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPostPageTemplateContext } from "../types"
import {
  ArticleFeatureImg,
  ArticleHeader,
  BlogPost,
  BlogPostContent,
} from "../components/atoms"
import { PostPagination } from "../components/organisms"

const BlogPostPageTemplate = ({
  data,
  pageContext,
}: PageProps<
  GatsbyTypes.BlogPostPageTemplateQuery,
  BlogPostPageTemplateContext
>): JSX.Element | null => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark ?? {}

  if (!frontmatter || !html || !excerpt) {
    return null
  }

  const Image = frontmatter.featuredImage?.childImageSharp?.fluid
  const { previous, next } = pageContext

  const props = {
    previous,
    next,
  }

  return (
    <Layout page>
      <SEO
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <BlogPost>
        <ArticleHeader>
          <section>
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
          </section>
          {Image && (
            <ArticleFeatureImg
              fluid={Image}
              alt={frontmatter.title + " - Featured image"}
              imgStyle={{
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            />
          )}
        </ArticleHeader>

        <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPost>
      {(previous || next) && <PostPagination {...props} />}
    </Layout>
  )
}

export default BlogPostPageTemplate

export const pageQuery = graphql`
  query BlogPostPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 1980
              maxHeight: 768
              quality: 80
              srcSetBreakpoints: [350, 700, 1050, 1400]
            ) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`
