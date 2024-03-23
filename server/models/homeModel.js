import mongoose from 'mongoose';

const HomeSchema = mongoose.Schema({
    headline: {type: String, lowercase: true, required: true, unique: false},
    websiteLink: {type: String, lowercase: true, required: true, unique: false},
    //pictures links??
})

var Home = mongoose.model('Home', HomeSchema);
export default Home;