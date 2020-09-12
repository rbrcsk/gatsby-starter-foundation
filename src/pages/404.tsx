import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { IconWrapper, LinkButton, TextAlign } from "../components/atoms"
import styled from "styled-components"

const LargeSkull = styled(RiSkullLine)`
  font-size: 128px;
  color: var(--primary-color);
`

const NotFound = (): JSX.Element => (
  <Layout page narrow>
    <SEO title="Page not found" />
    <TextAlign align="center">
      <header>
        <LargeSkull />
        <h1>Oops we did not expect that to happen</h1>
        <p>
          Have you wondered into the unknow. Let us help you, Please take a look
          at below options
        </p>
      </header>
      <div>
        <LinkButton to="/">
          <IconWrapper left flex>
            <RiArrowLeftSLine />
          </IconWrapper>{" "}
          Back to Homepage
        </LinkButton>
        <LinkButton $outline to="/contact">
          Report this{" "}
          <IconWrapper right flex>
            <RiBugLine />
          </IconWrapper>
        </LinkButton>
      </div>
    </TextAlign>
  </Layout>
)

export default NotFound
