import mongoose from 'mongoose';

const StreamsSchema = mongoose.Schema({
    title: {type: String, lowercase: true, required: true, unique: false},
    streamLink: {type: String, lowercase: true, required: true, unique: false},
    //score?
})

var Streams = mongoose.model('Streams', StreamsSchema);
export default Streams;