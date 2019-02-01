const path = require("path");
const router = require("express").Router();
const carRoutes = require("./cars");
const googleRoutes = require("./google");

// Car routes
router.use("/cars", carRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/index.html"));
// });

module.exports = router;
