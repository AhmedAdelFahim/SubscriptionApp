"use strict";

const express = require("express");
const subscriptionsController = require("../../controllers/subscriptionsController");

const router = express.Router();

router.get("/", subscriptionsController.getAllSubscriptions);

router.post("/", subscriptionsController.addNewSubscription);

module.exports = router;
