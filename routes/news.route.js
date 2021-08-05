const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

router = Router();

router.post("/news", newsController.addNews);
router.delete("/news/:id", newsController.deleteNewsById);
router.patch("/news/:id", newsController.updateNewsById);
router.get("/news/:id", newsController.getNewsOne);
router.get("/news", newsController.getNewsAll);
router.get("/news/category/:id", newsController.getNewsInCategory);

module.exports = router;

