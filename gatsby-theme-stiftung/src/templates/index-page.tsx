import React from "react"
import { graphql, PageProps } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

import { Composition } from "atomic-layout"
import {
  IndexPageContentWrapper,
  HomeBannerTitle,
  HomeBannerTagline,
  HomeBannerDescription,
  LinkButton,
  FeaturedImg,
  IconWrapper,
} from "../components/atoms"

const areasMobile = `
  introduction
  photo
  blog
`

const areasTablet = `
  introduction photo
  blog blog
  / 1fr 1fr
`

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 480
              maxHeight: 380
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const IndexPageTemplate = ({
  data,
}: PageProps<GatsbyTypes.IndexPageTemplateQuery>): JSX.Element | null => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark ?? {}

  if (!frontmatter || !markdownRemark) {
    return null
  }

  const Image = frontmatter?.featuredImage?.childImageSharp?.fluid

  return (
    <Layout>
      <SEO />
      <IndexPageContentWrapper>
        <Composition
          template={areasMobile}
          templateMd={areasTablet}
          gapCol={30}
          gapRow={60}
          alignItems={"center"}
        >
          {Areas => (
            <>
              <Areas.Introduction alignItems="center">
                <HomeBannerTitle>{frontmatter?.title}</HomeBannerTitle>
                <HomeBannerTagline>{frontmatter?.tagline}</HomeBannerTagline>
                <HomeBannerDescription
                  dangerouslySetInnerHTML={{ __html: html ?? "" }}
                />
                <LinkButton to={frontmatter?.cta?.ctaLink ?? "#"}>
                  {frontmatter?.cta?.ctaText}
                  <IconWrapper right flex>
                    <RiArrowRightSLine />
                  </IconWrapper>
                </LinkButton>
              </Areas.Introduction>
              <Areas.Photo>
                {Image && (
                  <FeaturedImg
                    fluid={Image}
                    alt={frontmatter?.title + " - Featured image"}
                  />
                )}
              </Areas.Photo>
              <Areas.Blog>
                <BlogListHome />
              </Areas.Blog>
            </>
          )}
        </Composition>
      </IndexPageContentWrapper>
    </Layout>
  )
}

export default IndexPageTemplate
