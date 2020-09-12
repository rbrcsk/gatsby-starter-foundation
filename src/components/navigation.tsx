import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const MenuItems = [
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

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = React.useState(false)

  const handleToggleClick = React.useCallback(() => {
    setShowMenu(state => !state)
  }, [setShowMenu])

  return (
    <nav className="site-navigation">
      <button
        onClick={handleToggleClick}
        className={"menu-trigger" + (showMenu ? " is-active" : "")}
      >
        <div className="icon-menu-line">
          <RiMenu3Line />
        </div>
        <div className="icon-menu-close">
          <RiCloseLine />
        </div>
      </button>
      <ul>
        {MenuItems.map((menuItem, index) => (
          <ListLink key={index} to={menuItem.path}>
            {menuItem.title}
          </ListLink>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
