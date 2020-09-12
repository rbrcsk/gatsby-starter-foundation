import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import { Container, SiteHeader } from "./atoms"
import styled from "styled-components"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
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
