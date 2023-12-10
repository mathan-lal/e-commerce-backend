import {Schema, model} from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    description: {
        type: String,
        trim: true
    }
}, {timestamps: true});

export const Category = model("Category", categorySchema);