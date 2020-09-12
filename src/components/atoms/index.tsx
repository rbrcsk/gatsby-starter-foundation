import GatsbyImage from "gatsby-image"
import styled from "styled-components"

export const FeaturedImg = (styled(GatsbyImage)<{ article?: boolean }>`
  border-radius: 12px;
  min-height: ${({ article }) => article && "50vh"};
` as unknown) as typeof GatsbyImage & { article?: boolean }

export const ArticleFeatureImg = (styled(FeaturedImg)<{ article?: boolean }>`
  min-height: 50vh;
` as unknown) as typeof GatsbyImage

export const IndexPageContentWrapper = styled.div`
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`
export const SiteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: var(--header-bg);
  padding: 30px 20px;
`

export const HomeBannerTitle = styled.h1`
  font-size: 48px;
  line-height: 48px;
  margin: 0 0 5px;
  font-weight: 900;
`

export const HomeBannerTagline = styled.p`
  font-size: 24px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
`
export const HomeBannerDescription = styled.div`
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 30px;
`

export const SiteFooter = styled.footer`
  display: flex;
  align-items: center;
  background: #eee;
  text-align: center;
  font-size: 14px;
  padding: 20px 0;
  p {
    margin: 0;
    color: #777;
  }
  a {
    font-weight: normal;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 20px;
`

export const TextAlign = styled.div<{ align: "left" | "center" | "right" }>`
  text-align: ${({ align }) => align};
`

export * from "./pagination"
export * from "./blog"
export * from "./button"
export * from "./icons"
