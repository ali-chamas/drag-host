const express = require("express");
const {
  getAllUsers,
  deleteUser,
  updateUserRole,
  updateUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/get", getAllUsers);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);
router.put("/update_role/:id", updateUserRole);

module.exports = router;