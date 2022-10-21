import React from "react";
import img from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
//hook
import { useAuth } from "../hooks/useAuth";
//Redux
import { logout, reset } from "../slice/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <div>
      {auth ? (
        <>
          <nav className="navbar navbar-expand-lg color">
            <div className="container-fluid">
              <Link to="/">
                <img src={img} alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end nav-bar"
                id="navbarNav"
              >
                <ul className="navbar-nav na-bar" id="navlink">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      aria-current="page"
                      href="#"
                      onClick={handleLogout}
                    >
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <nav className="navbar  color">
          <div className="container-fluid">
            <img src={img} alt="" />
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
