const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.listProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;

