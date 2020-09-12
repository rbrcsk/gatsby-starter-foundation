import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled, { ThemedStyledFunction } from "styled-components"

interface PostCardProps {
  data: GatsbyTypes.HomePageBlogPreviewListQuery["allMarkdownRemark"]["edges"][0]["node"]
}

const PostCardTitle = styled.h2`
  margin: 0 0 3px;
  font-size: 20px;
  font-weight: 600;

  a {
    color: var(--post-link-color);
  }
`

const PostCardMeta = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`

const PostCardContent = styled.div`
  margin-top: 16px;
`

const PostCardImage = (styled(Img)`
  border-radius: 12px;
  img {
    display: block;
    margin: 0;
  }
  @media (max-width: 576px) {
    min-height: 300px;
  }
` as unknown) as typeof Img

const PostCardWrapper = styled.article`
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  transition: box-shadow 0.3s linear;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    ${PostCardTitle} {
      color: var(--button-alternate-color);
    }
  }

  @media (max-width: 768px) {
    padding: 0;

    ${PostCardContent} {
      padding: 16px;
      margin-top: 0;
    }
    ${(PostCardImage as unknown) as ThemedStyledFunction<
      "img",
      any,
      any,
      never
    >} {
      border-radius: 12px 12px 0 0;
    }
  }
`

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
    <PostCardWrapper>
      {data.frontmatter.featuredImage && (
        <Link to={data.frontmatter.slug}>
          <PostCardImage
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            alt={data.frontmatter.title + " - Featured image"}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </Link>
      )}
      <PostCardContent>
        <PostCardTitle>
          <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>
        </PostCardTitle>
        <PostCardMeta>
          <time>{data.frontmatter.date}</time>
        </PostCardMeta>
      </PostCardContent>
    </PostCardWrapper>
  )
}

export default PostCard
