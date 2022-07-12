import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
  },
  userScore: {
    type: Number,
    require: true,
  },
})

export default mongoose.model('User', userSchema)
