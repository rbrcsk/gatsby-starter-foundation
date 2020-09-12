import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPostPageTemplateContext } from "../types"
import { ArticleFeatureImg } from "../components/atoms"
import styled from "styled-components"
import { PostPagination } from "../components/organisms"

const BlogPost = styled.article`
  figure {
    margin: 40px 0;
    text-align: center;
    figcaption {
      font-size: var(--font-size-small);
      color: var(--text-color-meta);
      margin-top: 5px;
    }
  }
  blockquote {
    margin-left: 0;
    padding: 5px 5px 5px 20px;
    background-color: #f2f2f2;
    border-left: 3px solid rgba(0, 0, 0, 0.1);
  }
  iframe {
    border: 2px solid black;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
`
const BlogPostContent = styled.div`
  max-width: 70ch;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.5;
  font-size: 20px;
`
const ArticleHeader = styled.header`
  section {
    padding: 35px 0;
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 36px;
    font-size: clamp(18px, calc(1rem + 2vw), 36px);
    margin: 0 auto 6px;
    max-width: 768px;
    line-height: 1.3;
    font-weight: 600;
  }

  time {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`

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
