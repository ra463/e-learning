import React, { Fragment } from "react";
import "./header.css";
import UserOptions from "./UserOptions";
import { useSelector } from "react-redux";
import logo from "./brain.png";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      <nav>
        <div className="header-1">
          <img src={logo} alt="header img" />
          <h1>
            <span>Career</span>
            <span>.Scouters</span>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Exams</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          {!isAuthenticated && (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
        </ul>
        {!isAuthenticated && (
          <div className="sign-in">
            <a href="/register">SIGN IN</a>
          </div>
        )}
      </nav>
      <div>{isAuthenticated && <UserOptions user={user} />}</div>
    </Fragment>
  );
};

export default Header;
