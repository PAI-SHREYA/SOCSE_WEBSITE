const express = require("express");
const router = express.Router();
// const DomainsClubs = require('../models/domain-model');
const DomainAuth = require("../controllers/domain-controller");

router.route('/').get(DomainAuth.viewDomain);
    


router.route('/add').post(DomainAuth.addDomain);
    






//update domains by Id

module.exports = router;