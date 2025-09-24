// backend/src/app.ts
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

// Example Auth Route
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  // Dummy auth logic for testing
  if (email === 'test@example.com' && password === 'password123') {
    return res.json({ token: 'fake-jwt-token' })
  }
  return res.status(401).json({ message: 'Invalid credentials' })
})

// Example Emails Route
app.get('/api/emails', (req, res) => {
  const authHeader = req.headers['authorization']
  if (!authHeader || authHeader !== 'Bearer fake-jwt-token') {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  return res.json([
    { id: 1, subject: 'Hello World', from: 'alice@example.com' },
    { id: 2, subject: 'Test Email', from: 'bob@example.com' },
  ])
})

export default app
