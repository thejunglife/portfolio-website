import User from '../models/user.js'

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

const userGet = (req, res) => {
  res.send('get')
}

export default { userGet, userInfo }
