import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface LogoProps {
  title: string
}

const SiteLogo = styled.div`
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }
`

const Logo = (props: LogoProps): JSX.Element => (
  <SiteLogo>
    <Link to="/">{props.title}</Link>
  </SiteLogo>
)

export default Logo
