import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  //console.log(currentUser)
  return (
    <div style={{ textAlign: "center" }}>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          F<span className="logo">oo</span>diesHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto data-toggle='dropdown'">
            {currentUser ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-item nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => dispatch(logoutUser())}
                    >
                      <li>Logout</li>
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item active">
                <a className="nav-link nav-item" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart ({cartstate.cartItems.length})
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}