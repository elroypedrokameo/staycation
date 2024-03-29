import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return window.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <BrandIcon />
              <div className="collapse navbar-collapse flex-grow-0">
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item${getNavLinkClass("/")}`}>
                    <Button className="nav-link" type="link" href="/">
                      Home
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                    <Button className="nav-link" type="link" href="browse-by">
                      Browse by
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/stories")}`}>
                    <Button className="nav-link" type="link" href="/stories">
                      Stories
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/agents")}`}>
                    <Button className="nav-link" type="link" href="/agents">
                      Agents
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
