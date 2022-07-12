import express from 'express'
import users from '../controllers/users.js'
import User from '../models/user.js'
const router = express.Router()

router.get('/', users.userGet)
router.post('/', users.userInfo)

export default router
