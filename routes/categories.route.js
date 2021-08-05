const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controller");

router = Router();

router.post("/categories", categoriesController.addCategory);
router.delete("/categories/:id", categoriesController.deleteCategoryById);
router.get("/categories", categoriesController.getCategories);

module.exports = router;