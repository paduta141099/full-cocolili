import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [window.scrollY]);

  return (
    <nav
      className={
        isScroll
          ? "navbar navbar-expand-lg navbar-light bg-dark shadow-md sticky-top"
          : "navbar navbar-expand-lg navbar-light"
      }
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-white" to="/">
            COCOLILI
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/services"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/collection"
              >
                our collection
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
