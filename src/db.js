import mongoose from 'mongoose';

const connectDB = async (uri) => {
  await mongoose.connect(uri);

  console.log('Connected to database');
};

export default connectDB;
