const Router = require("express");
const router = new Router();
const plateController = require("../controller/plate.controller")


router.post("/plate", plateController.createPlate);
router.get("/plate", plateController.getAllPlate);
router.get("/plate/:id", plateController.getOnePlate);
router.put("/plate", plateController.updatePlate);
router.delete("/plate/:id", plateController.deletePlate);
router.get("/platesort", plateController.getSortedPlate);
router.get("/plates", plateController.getAllPlate);


module.exports = router;