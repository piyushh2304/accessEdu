const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      console.error('MongoDB connection error:', error);
      if (error.name === 'MongoNetworkError') {
        console.error('Network error: Unable to connect to MongoDB. Please check your network and MongoDB URI.');
      }
      if (error.name === 'MongoParseError') {
        console.error('Parse error: The MongoDB URI is malformed. Please verify the connection string.');
      }
      process.exit(1);  
    }
}

module.exports = connectDB;

