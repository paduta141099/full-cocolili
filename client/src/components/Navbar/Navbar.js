import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const changeBackground = () => {
    setIsScroll(window.scrollY >= 75);
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
          ? "navbar navbar-expand-lg navbar-light text-white bg-dark shadow-sm sticky-top"
          : "navbar navbar-expand-lg navbar-light"
      }
    >
      <div className="container mb-2 text-center">
        <button
          className={isScroll ? "navbar-toggler text-white" : "navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={
              isScroll
                ? "navbar-toggler-icon text-white"
                : "navbar-toggler-icon"
            }
          ></span>
        </button>
        <div className="collapse navbar-collapse mt-2" id="navbarTogglerDemo01">
          <Link
            className={isScroll ? "navbar-brand text-white" : "navbar-brand"}
            to="/"
          >
            COCOLILI
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  isScroll ? "nav-link active text-white" : "nav-link active"
                }
                aria-current="page"
                to="/"
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  isScroll ? "nav-link active text-white" : "nav-link active"
                }
                aria-current="page"
                to="/services"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  isScroll ? "nav-link active text-white" : "nav-link active"
                }
                aria-current="page"
                to="/collection"
              >
                our collection
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  isScroll ? "nav-link active text-white" : "nav-link active"
                }
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
