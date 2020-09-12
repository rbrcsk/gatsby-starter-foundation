import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const PaginationLink = styled(GatsbyLink)<{
  $isActive?: boolean
  $number?: boolean
}>`
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  line-height: 1;

  color: ${({ $isActive }) => $isActive && "var(--header-bg)"};
  pointer-events: ${({ $isActive }) => $isActive && "none"};

  @media (max-width: 768px) {
    display: ${({ $number }) => $number && "none"};
  }
`

const PaginationContainer = styled.div`
  text-align: center;
  padding: 50px 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 5px;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 0;
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
`

const PostPaginationPageTitle = styled.span`
  line-height: 1.3;
`

const PostPaginationContainer = styled(PaginationContainer)`
  text-align: inherit;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 50px 0 0;

  ul {
    display: flex;
    justify-content: space-between;
  }
  li:nth-child(1) {
    text-align: left;
  }
  li:nth-child(2) {
    text-align: right;
  }

  p {
    font-size: 14px;
    margin: 0 0 5px;
    color: rgba(0, 0, 0, 0.5);
  }

  ${PaginationLink} {
    font-weight: normal;
    font-size: 16px;
    padding: 0;
  }

  @media (max-width: 768px) {
    ul {
      display: grid;
      justify-content: normal;
    }
    ${PaginationLink} {
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      display: block;
      margin-bottom: 10px;
      background: #fafafa;
    }
  }
`

export const PaginationAtoms = {
  Link: PaginationLink,
  Container: PaginationContainer,
  PostContainer: PostPaginationContainer,
  PostPageTitle: PostPaginationPageTitle,
}
