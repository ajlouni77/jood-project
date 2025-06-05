const express = require("express");
const router = express.Router();
const {
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
} = require("../controllers/UserController");
const { registerUser, loginUser,getUserRegistrationsByDay } = require("../controllers/UserController");

router.get("/users/exclude-admin", getUsersExcludingAdmin);

router.put("/users/update-status", updateUserStatus);

router.get("/users/count", getUserCount);


router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/users/registrations-by-day", getUserRegistrationsByDay);

module.exports = router;
