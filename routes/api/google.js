const router = require("express").Router();
const vinController = require("../../controllers/vinController");

// Matches with "/api/google"
router
  .route("/:title?")
  .get(vinController.findAll);

module.exports = router;
