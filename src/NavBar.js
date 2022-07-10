import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-1 ">
        <div className="container">
          <Link to="/" className="brand-logo lime-text text-darken-1">
            Site Name
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <CustomLink to="/login">Iniciar Sesión</CustomLink>
            </li>
            <li>
              <CustomLink to="/register">Registrarse</CustomLink>
            </li>
            <li>
              <CustomLink to="/list">Lista OOSS</CustomLink>
            </li>
            <li>
              <CustomLink to="/profile">Perfil</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
