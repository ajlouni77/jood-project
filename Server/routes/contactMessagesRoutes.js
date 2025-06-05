const express = require("express");
const router = express.Router();
const {
  getAllMessages,
  replyToMessage,
  addMessages,
} = require("../controllers/ContactMessageController");

router.get("/contact-messages", getAllMessages);
router.post("/contact-messages", addMessages);
router.post("/contact-messages/reply", replyToMessage);

module.exports = router;
