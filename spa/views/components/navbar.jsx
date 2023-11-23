import React from 'react'

function Navbar(props) {
  return (
    // Create a variation of a navbar
    <nav className={"navbar:dark"}>
        <ul className={props.navList}>
          <li>
          <a href="#">Links</a>
          </li>
        </ul>
    </nav>
  )
}

function NavbarDark(props){
  return(
      <nav className={"h-8 w:min:full bg:black-800"}>
          <ul className={props.navlist}>

          </ul>
      </nav>
  )
}

function NavbarLight(props){
  return (
    <nav className="h-8 w:min:full bg:gray-200">
      <ul className={props.navList}>

      </ul>
    </nav>
  )
}

module.exports = {
  Navbar,
  NavbarDark,
  NavbarLight
}