import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  user: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  calories: { type: Number, required: true, min: 0 },
  completedAt: { type: Date, required: true },
});

export default mongoose.model('Activity', activitySchema);