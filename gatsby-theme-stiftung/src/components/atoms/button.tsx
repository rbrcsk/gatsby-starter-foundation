import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"
import { IconWrapper } from "./icons"

interface ButtonProps {
  $outline?: boolean
}

const ButtonStyles = css<ButtonProps>`
  --padding: 20px;
  --margin: 20px;
  display: inline-flex;
  align-items: center;
  padding: var(--padding) calc(var(--padding) * 2);
  background-color: var(--button-alternate-color);
  color: var(--button-color);
  border-radius: 12px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-size: inherit;
  line-height: 1;
  transition: background 0.3s linear;

  ${({ $outline }) =>
    $outline &&
    `color: var(--primary-color);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    background: #fff;
    &:hover {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
      background: #f2f2f2;
    }`}

  &:hover {
    background-color: var(--button-color);
    color: var(--button-alternate-color);
  }

  ${IconWrapper} {
    display: inline-flex !important;
  }

  & + & {
    margin-left: 20px;
  }
`

export const LinkButton = styled(GatsbyLink)`
  ${ButtonStyles}
`

export const Button = styled.button`
  ${ButtonStyles}
`
