import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loder from "../loader/Loder";
import "./login.css";
import { FiMail } from "react-icons/fi";
import { FcLock } from "react-icons/fc";
import { BiFace } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useNavigate();
  const location = useLocation();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const registerSubmit = (e) => {
    e.preventDefault();

    const myform = new FormData();
    myform.set("name", name);
    myform.set("email", email);
    myform.set("password", password);
    myform.set("avatar", avatar);

    dispatch(register(myform));
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("./profile.png");

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
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
                <p>REGISTER</p>
              </div>
              <form
                className="signup_form"
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signup_name">
                  <BiFace />
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signup_email">
                  <FiMail />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signup_password">
                  <FcLock />
                  <input
                    type="password"
                    placeholder="Create Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <p>*Upload image of under 750kb.</p>
                <input type="submit" value="Register" className="signup_btn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Register;
