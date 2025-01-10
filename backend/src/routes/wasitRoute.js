const express = require("express");
const wasitController = require("../controllers/wasitController");

const router = express.Router();

router.post("/", wasitController.createWasitController);
router.get("/", wasitController.getAllWasitController);
router.get("/:id", wasitController.getWasitByIdController);
router.get("/posisi/:posisi", wasitController.getWasitByPosisiController);
router.put("/:id", wasitController.updateWasitController);
router.delete("/:id", wasitController.deleteWasitController);

module.exports = router;
