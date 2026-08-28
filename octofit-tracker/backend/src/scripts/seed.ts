import mongoose from 'mongoose';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Team from '../models/team.js';
import User from '../models/user.js';
import Workout from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/** Seed the octofit_db database with test data */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { name: 'Ava Rossi', email: 'ava.rossi@example.com', team: 'Trailblazers', points: 1280 },
      { name: 'Luca Bianchi', email: 'luca.bianchi@example.com', team: 'Trailblazers', points: 1140 },
      { name: 'Mia Esposito', email: 'mia.esposito@example.com', team: 'Summit Crew', points: 980 },
    ]);

    await Team.insertMany([
      { name: 'Trailblazers', color: '#2563eb', members: 2, totalPoints: 2420 },
      { name: 'Summit Crew', color: '#16a34a', members: 1, totalPoints: 980 },
    ]);

    await Activity.insertMany([
      { user: 'Ava Rossi', type: 'Run', durationMinutes: 42, calories: 410, completedAt: new Date('2026-08-27T07:30:00Z') },
      { user: 'Luca Bianchi', type: 'Cycle', durationMinutes: 55, calories: 520, completedAt: new Date('2026-08-26T18:00:00Z') },
      { user: 'Mia Esposito', type: 'Strength', durationMinutes: 35, calories: 280, completedAt: new Date('2026-08-25T17:15:00Z') },
    ]);

    await Leaderboard.insertMany([
      { user: 'Ava Rossi', team: 'Trailblazers', rank: 1, points: 1280, streak: 12 },
      { user: 'Luca Bianchi', team: 'Trailblazers', rank: 2, points: 1140, streak: 9 },
      { user: 'Mia Esposito', team: 'Summit Crew', rank: 3, points: 980, streak: 7 },
    ]);

    await Workout.insertMany([
      { title: 'Morning Momentum', category: 'Cardio', difficulty: 'Beginner', durationMinutes: 20, exercises: ['Jumping jacks', 'High knees', 'Bodyweight squats'] },
      { title: 'Full Body Forge', category: 'Strength', difficulty: 'Intermediate', durationMinutes: 35, exercises: ['Push-ups', 'Reverse lunges', 'Plank'] },
      { title: 'Recovery Flow', category: 'Mobility', difficulty: 'Beginner', durationMinutes: 15, exercises: ['Cat-cow', 'World’s greatest stretch', 'Child’s pose'] },
    ]);

    console.log('Database seeding complete: users, teams, activities, leaderboard, and workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
