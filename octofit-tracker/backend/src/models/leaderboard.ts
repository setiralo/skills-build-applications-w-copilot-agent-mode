import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({
  user: { type: String, required: true },
  team: { type: String, required: true },
  rank: { type: Number, required: true, min: 1 },
  points: { type: Number, required: true, min: 0 },
  streak: { type: Number, required: true, min: 0 },
});

export default mongoose.model('Leaderboard', leaderboardSchema);