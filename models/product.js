const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1, maxlength:25},
    description: {type: String, required: true, minlength:1},
    category: {type: String, required: true, minlength:1, maxlength:25},
    price: {type: Number, required: true},
    datAdded: {type: Date, default: Date.now()},
});

const Product = mongoose.model('Product', productSchema);

module.export = Product;