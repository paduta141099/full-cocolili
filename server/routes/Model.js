const modelController = require("../controllers/ModelController");

const router = require("express").Router();

//ADD Model
router.post("/", modelController.addModel);

module.exports = router;
