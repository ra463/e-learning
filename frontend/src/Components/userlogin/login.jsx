import { React, Fragment, useState, useEffect } from "react";
import "./login.css";
import Loder from "../loader/Loder";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../actions/userAction";
import { useAlert } from "react-alert";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useNavigate();
  const location = useLocation();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState(" ");
  const [loginPassword, setLoginPassword] = useState(" ");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const navigatePath = location.search
    ? location.search.split("=")[1]
    : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      history(navigatePath);
    }
  }, [dispatch, alert, error, history, isAuthenticated, navigatePath]);

  return (
    <Fragment>
      {loading ? (
        <Loder />
      ) : (
        <Fragment>
          <div className="login_container">
            <div className="login_box">
              <div className="login_toggle">
                <p>LOGIN</p>
              </div>

              <form className="login_form" onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <FiMail />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <BiLock />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forgot Password ?</Link>
                <input type="submit" value="login" className="login_btn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Login;
