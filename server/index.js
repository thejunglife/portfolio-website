import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

import contactRouter from './routes/contact.js'
import userRouter from './routes/users.js'

const app = express()

//to use __dirname in es module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//middleware
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.use('/', contactRouter)
app.use('/users', userRouter)

//Mongo DB
const uri = process.env.MONGO_URI
const port = process.env.PORT || 3001

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message))
