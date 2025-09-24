import express from 'express'

const router = express.Router()

// ✅ Mock login route
router.post('/login', (req, res) => {
  const { email, password } = req.body

  // For testing purposes only
  if (email === 'test@example.com' && password === 'password123') {
    return res.status(200).json({
      token: 'mock-jwt-token', // in real app, generate JWT
      user: { id: 1, email },
    })
  }

  // Invalid credentials
  return res.status(401).json({ error: 'Invalid credentials' })
})

// ✅ Optional logout (to expand later)
router.post('/logout', (req, res) => {
  // For now, just return success
  res.status(200).json({ message: 'Logged out successfully' })
})

export default router
