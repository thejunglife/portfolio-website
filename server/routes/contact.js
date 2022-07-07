import express from 'express'
import contact from '../controllers/contact.js'
const router = express.Router()

router.get('/', contact.contactForm)

export default router
