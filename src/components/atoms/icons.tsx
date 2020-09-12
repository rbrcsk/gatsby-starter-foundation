import styled from "styled-components"
import { RiHeart2Line } from "react-icons/ri"

export const IconWrapper = styled.span<{
  left?: boolean
  right?: boolean
  flex?: boolean
}>`
  display: ${({ flex }) => (flex ? "inline-flex" : "inline-block")};
  line-height: inherit;
  vertical-align: middle;
  align-items: center;
  margin-right: ${({ left }) => left && "var(--margin)"};
  margin-left: ${({ right }) => right && "var(--margin)"};
`

export const HeartIcon = styled(RiHeart2Line)`
  color: red;
`
