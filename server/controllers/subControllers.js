// subController.js

import Subscription from "../models/Subscription.js";

// Controller function for subscribing to a plan
export const subscribeToPlan = async (req, res) => {
    // Extract subscription details from the request body
    const { userId } = req.body;

    try {
        // Check if the user is already subscribed
        const existingSubscription = await Subscription.findOne({ userId });
        if (existingSubscription) {
            return res.status(400).json({ message: "User is already subscribed" });
        }

        // Create a new subscription record in the database
        const newSubscription = new Subscription({ userId, planId: 'yes' });
        await newSubscription.save();

        // Return success response
        res.status(201).json({ message: "Subscription successful", subscription: newSubscription });
    } catch (error) {
        // Handle errors
        console.error("Error subscribing to plan:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Controller function for updating subscription details
export const updateSubscription = async (req, res) => {
    // Extract subscription ID and updated details from the request body
    const { subscriptionId } = req.params;
    const updatedDetails = req.body;

    try {
        // Find the subscription by ID
        const subscription = await Subscription.findById(subscriptionId);
        if (!subscription) {
            return res.status(404).json({ message: "Subscription not found" });
        }

        // Update the planId if provided
        if (updatedDetails.planId && (updatedDetails.planId === 'yes' || updatedDetails.planId === 'no')) {
            subscription.planId = updatedDetails.planId;
        }

        // Save the updated subscription
        await subscription.save();

        // Return success response
        res.status(200).json({ message: "Subscription details updated", subscription });
    } catch (error) {
        // Handle errors
        console.error("Error updating subscription details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Controller function for canceling a subscription
export const cancelSubscription = async (req, res) => {
    // Extract subscription ID from the request parameters
    const { subscriptionId } = req.params;

    try {
        // Find the subscription by ID and remove it from the database
        const deletedSubscription = await Subscription.findByIdAndRemove(subscriptionId);

        // Check if the subscription was found and deleted
        if (!deletedSubscription) {
            return res.status(404).json({ message: "Subscription not found" });
        }

        // Return success response
        res.status(200).json({ message: "Subscription canceled" });
    } catch (error) {
        // Handle errors
        console.error("Error canceling subscription:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
