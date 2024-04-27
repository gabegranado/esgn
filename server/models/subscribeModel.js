import { Int32 } from 'mongodb';
import mongoose from 'mongoose';

const SubscribeSchema = mongoose.Schema({
    gameID: {type: mongoose.Schema.Types.ObjectId, required: true, unique: false},
    userID: {type: mongoose.Schema.Types.ObjectId, required: true, unique: false},
    // subscribeID: {type: mongoose.Schema.Types.ObjectId}
    //score? language??
})

var Subscribe = mongoose.model('Subscribe', SubscribeSchema);
export default Subscribe;