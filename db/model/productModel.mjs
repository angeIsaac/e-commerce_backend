import mongoose from "mongoose";


const { Schema, model } = mongoose;
const {Types: {ObjectId}} = Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    quantite: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // image: {
    //     type: String,
    //     required: true
    // }
});

export const productModel = model("product", productSchema);