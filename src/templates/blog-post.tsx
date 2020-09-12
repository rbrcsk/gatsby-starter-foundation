import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPostPageTemplateContext } from "../types"

type PaginationProps = Pick<BlogPostPageTemplateContext, "previous" | "next">

const Pagination = (props: PaginationProps) => {
  let previousFragment: React.ReactNode
  let nextFragment: React.ReactNode

  if (
    props.previous?.frontmatter?.template === "blog-post" &&
    props.previous.frontmatter.slug !== undefined &&
    props.previous.frontmatter.title !== undefined
  ) {
    previousFragment = (
      <li>
        <Link to={props.previous.frontmatter.slug} rel="prev">
          <p>
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </p>
          <span className="page-title">{props.previous.frontmatter.title}</span>
        </Link>
      </li>
    )
  }

  if (
    props.next?.frontmatter?.template === "blog-post" &&
    props.next.frontmatter.slug !== undefined &&
    props.next.frontmatter.title !== undefined
  ) {
    nextFragment = (
      <li>
        <Link to={props.next.frontmatter.slug} rel="next">
          <p>
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </p>
          <span className="page-title">{props.next.frontmatter.title}</span>
        </Link>
      </li>
    )
  }

  return (
    <div className="pagination -post">
      <ul>
        {previousFragment}
        {nextFragment}
      </ul>
    </div>
  )
}

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
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
          </section>
          {Image && (
            <Img
              fluid={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
              imgStyle={{
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            />
          )}
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      {(previous || next) && <Pagination {...props} />}
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
