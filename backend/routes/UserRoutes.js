const express = require("express");
const {
  registerUser,
  login,
  logout,
  updatePassword,
  updateProfile,
  myProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  forgorPassword,
  resetPassword,
  updateProfilePhoto,
} = require("../controllers/Usecontroller");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(login);

router.route("/logout").get(isAuthenticated, logout);

router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/forgot/password").post(forgorPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/update/profilePhoto").put(isAuthenticated, updateProfilePhoto);

router.route("/me").get(isAuthenticated, myProfile);

router
  .route("/admin/users")
  .get(isAuthenticated, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthenticated, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticated, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticated, authorizeRoles("admin"), deleteUser);

module.exports = router;
