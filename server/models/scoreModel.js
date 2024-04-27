import { Int32 } from 'mongodb';
import mongoose from 'mongoose';

const ScoreSchema = mongoose.Schema({
    team1Score: {type: Number, required: true, unique: false},
    team2Score: {type: Number, required: true, unique: false},
    gameID: {type: mongoose.Schema.Types.ObjectId, required: true},
    scoreID: {type: mongoose.Schema.Types.ObjectId}
    //score? language??
})

var Score = mongoose.model('Scores', ScoreSchema);
export default Score;