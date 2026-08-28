import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  members: { type: Number, required: true, min: 0 },
  totalPoints: { type: Number, required: true, min: 0 },
});

export default mongoose.model('Team', teamSchema);