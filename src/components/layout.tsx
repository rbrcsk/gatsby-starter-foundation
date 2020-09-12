import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "./logo"
import Navigation from "./navigation"

import Footer from "./footer"
import { Container, SiteHeader } from "./atoms"
import styled, { createGlobalStyle, css } from "styled-components"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: var(--font-family);
    font-size: 18px;
  }
  code {
    font-family: var(--font-family-mono);
  }
  main {
    p {
      line-height: 1.5;
    }
  }
  a {
    color: var(--home-link-color);
    text-decoration: none;
    &:hover {
      color: var(--home-link-hover-color);
    }
  }

  /* // breakpoints */
  /* $breakpoint-sm: 576px; */
  /* $breakpoint-md: 768px; */
  /* $breakpoint-lg: 992px; */
  /* $breakpoint-xl: 1200px; */

  :root {
    --font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    --font-family-mono: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
      monospace;
    --font-size-small: 12px;

    --primary-color: #5c2941;
    --header-bg: #5c2941;

    --home-link-color: #a1613f;
    --home-link-hover-color: var(--primary-color);

    --button-color: #e5c3d3;
    --button-alternate-color: #5c2941;

    --post-link-color: #0f070b;

    --nav-link-hover-bg: #111;
    --text-color-meta: rgba(0, 0, 0, 0.5);

    --label-text: rgba(0, 0, 0, 0.5);
    --input-focus-border: #83aaac;

     /* CSS Grid Utility */
    --grid-gap: 30px;
  }
`

const Main = styled(Container)<{ page?: boolean; narrow?: boolean }>`
  min-height: calc(100vh - 60px - 81px);
  padding: ${({ page }) => page && "50px 20px"};
  & > div {
    max-width: ${({ narrow }) => narrow && "768px"};
    margin: 0 auto;
  }
`

interface LayoutProps {
  page?: boolean
  narrow?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, page, narrow }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <>
      <GlobalStyles />
      <SiteHeader>
        <Logo title={siteTitle} />
        <Navigation />
      </SiteHeader>
      <Main as="main" page={page} narrow={narrow}>
        <div>{children}</div>
      </Main>
      <Footer />
    </>
  )
}

export default Layout
