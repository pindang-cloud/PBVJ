const express = require("express");
const router = express.Router();
const pemainController = require("../controllers/pemainController");

router.post("/", pemainController.createPemain);
router.get("/", pemainController.getAllPemain);
router.get("/:id", pemainController.getPemainById);
router.get("/tim/:timId", pemainController.getPemainByTim);
router.put("/:id", pemainController.updatePemain);
router.delete("/:id", pemainController.deletePemain);

module.exports = router;
