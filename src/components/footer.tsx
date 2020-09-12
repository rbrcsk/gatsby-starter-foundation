import React from "react"
import { Link } from "gatsby"
import { Container, HeartIcon, IconWrapper, SiteFooter } from "./atoms"

const Footer = (): JSX.Element => (
  <SiteFooter>
    <Container>
      <p>
        A GatsbyJS Starter for Netlify CMS, Made with{" "}
        <IconWrapper>
          <HeartIcon />
        </IconWrapper>{" "}
        by <Link to="/">Stackrole.com</Link>
      </p>
    </Container>
  </SiteFooter>
)

export default Footer
