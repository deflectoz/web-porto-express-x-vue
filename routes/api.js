const express = require("express");

const router = express.Router();
const MasterController = require("../controllers/MasterController");

router.get("/login", (req, res) => {
  res.json({ items: [] });
});

//Route
router.get("/master/category", MasterController.index);
router.post("/master/category/add", MasterController.store);
router.post("/master/category/get", MasterController.getData);

module.exports = router;
