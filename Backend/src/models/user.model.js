import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
  username:{
    type:String,
    unique:true,
    required:true,
    trim:true
  },
  email:{
    type:String,
    unique:true,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    default:"user"
  }
},{timestamps:true})

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password,this.password)
}

const User = mongoose.model("User",userSchema)
export default User;