import React from "react"
import { Link } from "gatsby"

interface LogoProps {
  title: string
}

const Logo = (props: LogoProps): JSX.Element => (
  <div className="site-logo">
    <Link to="/">{props.title}</Link>
  </div>
)

export default Logo
