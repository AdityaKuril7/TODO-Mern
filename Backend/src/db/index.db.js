import mongoose from 'mongoose';

const connectDb = async () => {
  try{
    const conn = await mongoose.connect("mongodb://localhost:27017/Todo")
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }catch (err) {
    console.log(err)
  }
}

export default connectDb