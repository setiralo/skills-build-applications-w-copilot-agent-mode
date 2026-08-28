import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  exercises: { type: [String], required: true },
});

export default mongoose.model('Workout', workoutSchema);