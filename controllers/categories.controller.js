const Category = require("../models/Category.model");

module.exports.categoriesController = {
    addCategory: async (req, res) => {
        try {
            await Category.create({
                name: req.body.name
            });
            res.json("Категория ${req.body.name} добавлена");
        } catch (e) {
            console.log(e);
        }
    },

    deleteCategoryById: async (req, res) => {
        try {
            await Category.findOneAndDelete(req.params.id);

            res.json("Категория удалена");
        } catch (e) {
            console.log(e);
        }
    },
    getCategories: async (req, res) => {
        try {
            const data = await Category.find();

            res.json(data);
        } catch (e) {
            console.log(e);
        }
    }
};


