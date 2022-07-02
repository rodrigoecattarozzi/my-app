import React from 'react'

function NavBar() {
  return (
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <a href="google.com" className="brand-logo lime-text text-darken-1">
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="login.html">Iniciar Sesión</a></li>
            <li><a href="register.html">Registrarse</a></li>
            <li><a href="list.html">Lista OOSS</a></li>
          </ul>
        </div>
      </nav>
  )
}

export default NavBar;
