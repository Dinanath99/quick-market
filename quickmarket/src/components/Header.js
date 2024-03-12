import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { LuShoppingBag } from "react-icons/lu";
import SearchInput from "./Form/SearchInput";
import useCategory from "../hooks/useCategory";
import { useCart } from "../context/Cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const { categories } = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successful");
  };

  return (
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
          <SearchInput />
          <li className="nav-item ">
            <NavLink to="/" className="nav-link" href="#">
              Home <span className="sr-only"></span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to={"/categories"}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to={`/categories`}>
                  All categories
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.id}>
                  <Link className="dropdown-item" to={`/category/${c.slug}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {!auth.user ? (
            <>
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
            </>
          ) : (
            <>
              <li className="dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                      href="#"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            </>
          )}
          <li className="nav-item">
            <Badge count={cart?.length} showZero>
              <NavLink to="/cart" className="nav-link">
                {" "}
                {/* Fixing typo here */}
                Cart
              </NavLink>
            </Badge>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
