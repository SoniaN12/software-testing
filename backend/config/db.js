import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Add connection options with timeouts
    const options = {
      serverSelectionTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000,
      bufferCommands: false,
    };

    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gmail_clone', options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    throw error; // Re-throw to allow test to fail properly
  }
};

export default connectDB;