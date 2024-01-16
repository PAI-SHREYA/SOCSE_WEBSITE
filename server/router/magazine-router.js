const express = require("express");
const router = express.Router();
const Magazineform = require("../controllers/magazine-controller");

router.route("/add-magazine").post(Magazineform.addMagazine);
router.route("/get-magazine").get(Magazineform.getMagazine);


module.exports = router;