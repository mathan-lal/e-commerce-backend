import { Schema, model } from "mongoose";

const paymentMethodSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    cardType: {
        type: String
    },

    cardNumber: {
        type: String
    },

    expirationDate: {
        type: String
    }
}, {timestamps: true});

export const Payment = model("Payment", paymentMethodSchema);
