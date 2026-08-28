import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  team: { type: String, required: true },
  points: { type: Number, required: true, min: 0 },
});

export default mongoose.model('User', userSchema);