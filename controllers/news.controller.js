const News = require("../models/News.model");
const Category = require("../models/Category.model");
const Comment = require("../models/Comment.model");

module.exports.newsController = {
    addNews: async (req,res) => {
        try {
            await News.create({
                title: req.body.title,
                text: req.body.text,
                categoryId: req.body.categoryId,
                img: req.body.img 
            });
            res.json("Новость добавлена");
        } catch (e) {
            console.log(e)
        }
    },

    deleteNewsById: async (req, res) => {
        try {
            await News.findByIdAndDelete(req.params.id);

            res.json("Новость удалена");
        } catch (e) {
            console.log(e);
        }
    },

    updateNewsById: async (req, res) => {
        try {
            await News.findByIdAndUpdate(req.params.id, req, body);

            res.json("Новость отредактирована");
        } catch (e) {
            console.log(e);
        }
    },

    getNewsOne: async (req, res) => {
        try {
            const news = await News.findById(req.params.id).lean()
            const category = await Category.find().lean()
            const comment = await Comment.find({newsId: req.params.id}).lean()


            res.render("singleNews", {
                news,
                category,
                comment
            });
        } catch (e) {
            console.log(e);
        }
    },

    getNewsAll: async (req, res) => {
        try {
            const news = await News.find().lean().sort({_id: -1}).limit(3);
            const category = await Category.find().lean()
            res.render("news",{
                news,
                category
            });
        } catch (e) {
            console.log(e);
        }
    },

    getNewsInCategory: async (req, res) => {
        try {
            const news =  await News.find({ categoryId: req.params.id }).populate("Category").lean();
            //const category = await Category.find()

            res.render("home", {
                news
            });
        } catch (e) {
            console.log(e);
        }
    }
};