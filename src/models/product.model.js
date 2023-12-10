import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        trim: true,
        index: true
    },

    productCategory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],

    stock: {
        type: Number,
        required: true
    },

    productImage: [
        {
            type: String
        }
    ]

}, {timestamps: true});

export const Product = model("Product", productSchema);