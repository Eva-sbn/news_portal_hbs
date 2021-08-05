const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

router = Router();

router.post("/comments", commentsController.addCommentById);
router.delete("/comments/:id", commentsController.deleteCommentById);
router.get("/comments/:id", commentsController.getCommentsForNews);

module.exports = router;