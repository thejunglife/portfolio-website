import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

//to use __dirname in es module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3000

//middleware
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => console.log('listening on port ' + PORT))
