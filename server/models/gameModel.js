import mongoose from 'mongoose';

const GameSchema = mongoose.Schema({
    game: {type: String, lowercase: true, required: true, unique: false},
    team1Name: {type: String, lowercase: true, required: true, unique: false},
    team2Name: {type: String, lowercase: true, required: true, unique: false},
    gameID: {type: mongoose.Schema.Types.ObjectId}
    //score? language??
})

var Game = mongoose.model('Games', GameSchema);
export default Game;