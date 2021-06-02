"use strict";

const express = require("express");
const subscriptionsRoute = require("./subscriptions");

const router = express.Router();

router.use("/subscriptions", subscriptionsRoute);

module.exports = router;
