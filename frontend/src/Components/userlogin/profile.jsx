import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector } from "react-redux";
import Loder from "../loader/Loder";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const history = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      history("/login");
    }
  }, [history, isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loder />
      ) : (
        <Fragment>
          <div className="head">
            <h2>Manage User</h2>
            <Link to="/me/update">Update Profile</Link>{" "}
          </div>
          <div className="profile-Container">
            <div>
              <img
                src={user.avatar.url}
                alt={user.avatar.url ? user.avatar.url : "/profile.png"}
              />
              <Link to="/me/updatePhoto">
                <EditIcon />
              </Link>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
            <div>
              <div>
                <div>Name :</div>
                <p>{user.name}</p>
              </div>
              <div>
                <div>E-mail :</div>
                <p>{user.email}</p>
              </div>
              <div>
                <div>Joined On :</div>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>
              <div>
                <Link to="/me/updatePhoto">Change Picture</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
