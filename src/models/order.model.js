import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [
        {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },

        quantity: {
            type: Number,
            default: 1
        },

        price: {
            type: Number
        }
    }
    ],

    totalAmount: {
        type: Number
    },

    status:{
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'canceled'],
        default: 'pending'
    },

    shippingAddress: {
        type: String
    },

    orderDate: {
        type: Date,
        default: Date.now
    },

    paymentMethod: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    }

}, {timestamps: true});

export const Order = model("Order", orderSchema);
