const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
    title: String,
    text: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    img: String
});
const News = mongoose.model("News",newSchema);

module.exports = News;