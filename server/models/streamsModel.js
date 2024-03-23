import mongoose from 'mongoose';

const StreamsSchema = mongoose.Schema({
    title: {type: String, lowercase: true, required: true, unique: false},
    streamLink: {type: String, lowercase: true, required: true, unique: false},
    gameCategory: {type: String, lowercase: true, required: true, unique: false},
    streamID: {type: mongoose.Schema.Types.ObjectId}
    //score? language??
})

var Streams = mongoose.model('Streams', StreamsSchema);
export default Streams;