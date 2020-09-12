import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

interface PostCardProps {
  data: GatsbyTypes.HomePageBlogPreviewListQuery["allMarkdownRemark"]["edges"][0]["node"]
}

const PostCard = ({ data }: PostCardProps): JSX.Element | null => {
  if (
    !data.frontmatter?.slug ||
    !data.frontmatter?.title ||
    !data.frontmatter?.date ||
    !data.frontmatter?.featuredImage?.childImageSharp?.fluid
  ) {
    return null
  }

  return (
    <article className="post-card">
      {data.frontmatter.featuredImage ? (
        <Link to={data.frontmatter.slug}>
          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            alt={data.frontmatter.title + " - Featured image"}
            className="featured-image"
            imgStyle={{
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </Link>
      ) : (
        ""
      )}
      <div className="post-content">
        <h2 className="title">
          <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>
        </h2>
        <p className="meta">
          <time>{data.frontmatter.date}</time>
        </p>
      </div>
    </article>
  )
}

export default PostCard
