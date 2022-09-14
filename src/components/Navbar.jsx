import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-dark bg-dark" href="/">
                  {props.link}
                </a>
              </li>
            </ul>
            <div className="form-check form-switch text-light">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  title: "Set title here",
};

export default Navbar;
