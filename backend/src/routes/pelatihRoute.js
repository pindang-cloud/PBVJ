const express = require("express");
const pelatihController = require("../controllers/pelatihController");

const router = express.Router();

router.post("/", pelatihController.createPelatihController);
router.get("/", pelatihController.getAllPelatihController);
router.get("/:id", pelatihController.getPelatihByIdController);
router.get("/tim/:id", pelatihController.getPelatihByTimController);
router.put("/:id", pelatihController.updatePelatihController);
router.delete("/:id", pelatihController.deletePelatihController);

module.exports = router;
