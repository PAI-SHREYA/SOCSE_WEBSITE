const express = require("express");
const router = express.Router();
const EventForm = require("../controllers/events-controller");
const ResultForm=require("../controllers/result-controller");

router.route("/add-event").post(EventForm.addEvent);
router.route("/get-event").get(EventForm.getEvent);
router.route("/upcoming-event").get(EventForm.upcomingEvent);
router.route("/past-event").get(EventForm.pastEvent);
router.route("/get-result").get(ResultForm.Getresult);
router.route("/add-result").post(ResultForm.Addresult);



module.exports = router;