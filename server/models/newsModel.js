import mongoose from 'mongoose';

const NewsSchema = mongoose.Schema({
    headline: {type: String, lowercase: true, required: true, unique: false},
    websiteLink: {type: String, lowercase: true, required: true, unique: false},
    //pictures links??
})

var News = mongoose.model('News', NewsSchema);
export default News;