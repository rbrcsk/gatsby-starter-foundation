import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import styled from "styled-components"

const menuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const SiteNavigation = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline-block;
    margin-left: 20px;
  }
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  a[aria-current="page"] {
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 992px) {
    ul {
      display: none;
      position: absolute;
      right: 0;
      top: 100%;
      z-index: 1;
      background: #421e2f;
      width: 100%;
      max-width: 320px;
      border-radius: 0 0 0 12px;
      overflow: hidden;
    }
    ul li {
      display: block;
      margin-left: 0;
    }
    a {
      display: block;
      padding: 20px;
    }
    a:hover {
      background-color: #29121d;
    }
  }
`

const MenuIconClose = styled(RiCloseLine)``
const MenuIcon3Line = styled(RiMenu3Line)``

const MenuTriggerButton = styled.button<{ isActive: boolean }>`
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  padding: 0;
  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;

    & + ul {
      display: ${({ isActive }) => isActive && "block"};
    }

    ${MenuIconClose} {
      display: ${({ isActive }) => (isActive ? "flex" : "none")};
    }
    ${MenuIcon3Line} {
      display: ${({ isActive }) => (isActive ? "none" : "flex")};
    }
  }
`

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = React.useState(false)

  const handleToggleClick = React.useCallback(() => {
    setShowMenu(state => !state)
  }, [setShowMenu])

  return (
    <SiteNavigation>
      <MenuTriggerButton onClick={handleToggleClick} isActive={showMenu}>
        <MenuIconClose />
        <MenuIcon3Line />
      </MenuTriggerButton>
      <ul>
        {menuItems.map((menuItem, index) => (
          <ListLink key={index} to={menuItem.path}>
            {menuItem.title}
          </ListLink>
        ))}
      </ul>
    </SiteNavigation>
  )
}

export default Navigation
