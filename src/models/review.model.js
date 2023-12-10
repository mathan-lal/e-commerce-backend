import { Schema, model } from "mongoose";

const reviewSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },

    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    comment: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }


}, {timestamps: true});

export const Review = model("Review", reviewSchema);
