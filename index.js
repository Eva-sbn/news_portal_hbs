const express = require("express");
const mongoose = require("mongoose");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.json());

app.use(require("./routes/news.route"));
app.use(require("./routes/categories.route"));
app.use(require("./routes/comments.route"));

app.engine(".hbs",hbs({extname:".hbs"}));
app.set("view engine",".hbs");




mongoose.connect("mongodb+srv://eva:eva_sabina07@cluster0.rdqbf.mongodb.net/News_portal?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        app.listen(3000, () => console.log("Server has been started..."));

        console.log("Успешное подключение к базе данных");
    });


