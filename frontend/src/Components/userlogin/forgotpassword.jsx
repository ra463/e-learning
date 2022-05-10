import React, { Fragment, useState, useEffect } from "react";
import Loder from "../loader/Loder";
import "./forgotPassword.css";
import { FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../actions/userAction";
import { useAlert } from "react-alert";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { message, error, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myform = new FormData();
    myform.set("email", email);

    dispatch(forgotPassword(myform));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);
  return (
    <Fragment>
      {loading ? (
        <Loder />
      ) : (
        <Fragment>
          <div className="ForgotPassword-container">
            <div>
              <h2>Forgot Password</h2>
              <form onSubmit={forgotPasswordSubmit}>
                <div>
                  <FiMail />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPassword;
