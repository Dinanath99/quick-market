import React from "react";
import { NavLink, Link } from "react-router-dom";

import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            <LuShoppingBag /> QuickMarket
          </Link>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/category" className="nav-link" href="#">
                Category <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" href="#">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" href="#">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" href="#">
                cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
