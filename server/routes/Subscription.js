// Subscription.js

import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    planId: {
        type: String,
        enum: ['yes', 'no'], // Plan can be either 'yes' or 'no'
        default: 'no' // Default value is 'no'
    }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema, 'sub'); // Specify collection name

export default Subscription;
