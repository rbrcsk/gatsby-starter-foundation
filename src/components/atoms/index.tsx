import { Link as GatsbyLink } from "gatsby"
import GatsbyImage from "gatsby-image"
import { RiHeart2Line } from "react-icons/ri"
import styled from "styled-components"

export const IconWrapper = styled.span<{ left?: boolean; right?: boolean }>`
  display: inline-block;
  line-height: inherit;
  vertical-align: middle;
  align-items: center;
  margin-left: ${({ left }) => left && "var(--margin)"};
  margin-right: ${({ right }) => right && "var(--margin)"};
`

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

export const LinkButton = styled(GatsbyLink)`
  --padding: 20px;
  --margin: 20px;
  display: inline-flex;
  align-items: center;
  padding: var(--padding) calc(var(--padding) * 2);
  background-color: var(--button-alternate-color);
  color: var(--button-color);
  border-radius: 12px;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  font-size: inherit;
  line-height: 1;
  transition: background 0.3s linear;

  &:hover {
    background-color: var(--button-color);
    color: var(--button-alternate-color);
  }

  ${IconWrapper} {
    display: inline-flex;
  }
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

export const HeartIcon = styled(RiHeart2Line)`
  color: red;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 20px;
`

export * from "./pagination"
