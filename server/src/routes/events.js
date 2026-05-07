const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middlewares/auth");
const {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.get("/", getEvents); //user see all events
router.get("/:id", getEventById); // user see event details by id
router.post("/", protect, admin, createEvent); // admin create event
router.put("/:id", protect, admin, updateEvent); // admin update event by id
router.delete("/:id", protect, admin, deleteEvent); // admin delete event by id

module.exports = router;
