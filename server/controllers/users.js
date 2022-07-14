import User from '../models/user.js'

//this will be used later when games section gets created
const userInfo = async (req, res) => {
  console.log('hello')
  try {
    const newUser = new User({
      userName: req.body.userName,
      userScore: req.body.userScore,
    })
    await newUser.save()
    console.log(newUser)
    res.send('User added')
  } catch (err) {
    console.log(err)
  }
}

const userGet = async (req, res) => {
  const getUser = await User.find()
  res.send(getUser)
}

export default { userGet, userInfo }
