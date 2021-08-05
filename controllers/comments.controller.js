const Comment = require("../models/Comment.model");

module.exports.commentsController = {
    addCommentById: async (req, res) => {
        try {
            await Comment.create({
                author: req.body.author,
                text: req.body.text,
                newsId: req.body.newsId
            });

            res.json("Комментарий добавлен");
        } catch (e) {
            console.log(e);
        }
    },

    deleteCommentById: async (req, res) => {
        try {
            await Comment.findByIdAndDelete(req.params.id);

            res.json("Комментарий удален");
        } catch (e) {
            console.log(e);
        }
    },

    getCommentsForNews: async (req, res) => {
        try {
            const data = await Comment.find({ newsId: req.params.id });

            res.json(data);
        } catch (e) {
            console.log(e);
        }
    }
};
