const express = require("express");
const router = express.Router();
const Workform = require("../controllers/workshop-controller");

router.route("/add-workshop").post(Workform.Addworkshop);
router.route("/search-workshop").post(Workform.Searchworkshop);


module.exports = router;