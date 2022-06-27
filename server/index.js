import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

//to use __dirname in es module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//middleware
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Mongo DB credentials
let user = process.env.USER
let pass = process.env.PASS

//Mongo DB
const CONNECTION_URL = `mongodb+srv://${user}:${pass}@cluster0.dqfl1.mongodb.net/?retryWrites=true&w=majority`
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message))

