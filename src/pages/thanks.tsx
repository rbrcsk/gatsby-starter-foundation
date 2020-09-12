import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { IconWrapper, LinkButton, TextAlign } from "../components/atoms"
import styled from "styled-components"

const LargeSuccess = styled(RiCheckboxCircleLine)`
  font-size: 128px;
  color: var(--primary-color);
`

const Thanks = (): JSX.Element => (
  <Layout page narrow>
    <SEO title="Thank you" />
    <TextAlign align="center">
      <LargeSuccess />
      <h1>Got your message</h1>
      <p>Thank you for getting in touch us. We will get back to you shortly.</p>
      <LinkButton to="/">
        <IconWrapper left flex>
          <RiArrowLeftSLine />
        </IconWrapper>{" "}
        Back to Homepage
      </LinkButton>
    </TextAlign>
  </Layout>
)

export default Thanks
