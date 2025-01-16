const express = require("express");
const router = express.Router();
const pemainController = require("../controllers/pemainController");

router.post("/", pemainController.createPemainController);
router.get("/", pemainController.getAllPemainController);
router.get("/:id", pemainController.getPemainByIdController);
router.get("/tim/:timId", pemainController.getPemainByTimController);
router.put("/:id", pemainController.updatePemainController);
router.delete("/:id", pemainController.deletePemainController);

module.exports = router;
