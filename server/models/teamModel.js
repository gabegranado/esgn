import mongoose from 'mongoose';

const TeamSchema = mongoose.Schema({
    teamName: {type: String, lowercase: true, required: true, unique: false},
    teamID: {type: Number, lowercase: true, required: true, unique: false},
    //teamPlayerNumbers: {type: String, lowercase: true, required: true, unique: false},
    teamPlayerNames: {type: String, lowercase: true, required: true, unique: false},
    totalPlayers: {type: Number, lowercase: true, required: true, unique: false},
    teamVictories: {type: Number, lowercase: true, required: true, unique: false},
    teamLosses: {type: Number, lowercase: true, required: true, unique: false},
    gameCategory: {type:String, lowercase: false, required:true, unique: false}
})

var Team = mongoose.model('Team', TeamSchema);
export default Team;