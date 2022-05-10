import React, { Fragment, useState, useEffect } from "react";
import Loder from "../loader/Loder";
import "./resetPassword.css";
import { FcLock, FcUnlock } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";


const ResetPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useNavigate();
  
    const { loading, error, success } = useSelector(
      (state) => state.forgotPassword
    );
  
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ");
  
    const { token } = useParams();
  
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myform = new FormData();
  
      myform.set("password", password);
      myform.set("confirmPassword", confirmPassword);
      dispatch(resetPassword(token, myform));
    };
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      if (success) {
        alert.success("Password Updated Successfully");
        history("/login");
      }
    }, [dispatch, alert, error, history, success]);
    return (
      <Fragment>
        {loading ? (
          <Loder />
        ) : (
          <Fragment>
            <div className="resetPassword_container">
              <div>
                <h2>Reset Password</h2>
                <form onSubmit={resetPasswordSubmit}>
                  <div>
                    <FcUnlock />
                    <input
                      type="password"
                      placeholder="New Password"
                      required
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <FcLock />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      name="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
  
  export default ResetPassword;
  