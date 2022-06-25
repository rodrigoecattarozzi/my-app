import React from 'react'

function NavBar() {
  return (
    <nav>
    <div className="nav-wrapper indigo darken-1">
      <a href="google.com" className="brand-logo lime-text text-darken-1">
      <i class="material-icons">cake</i>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar;
