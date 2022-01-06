import { NavLink } from "react-router-dom";

function Headers() {
  return (
    <header id="masthead" className="site-header">
      <div className="site-branding">
        <h1 className="site-title">
          <a href="index.html" rel="home">
            Blog05
          </a>
        </h1>
        <h2 className="site-description">Minimalist Portfolio HTML Template</h2>
      </div>
      <nav id="site-navigation" className="main-navigation">
        <button className="menu-toggle">Menu</button>
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <div className="menu-menu-1-container">
          <ul id="menu-menu-1" className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
