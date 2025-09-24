import express from 'express'
import emailroutes from './routes/emailroutes.js'
import authroutes from './routes/authroutes.js'

const app = express()
app.use(express.json())

app.use('/api/emails', emailroutes)

export default app
