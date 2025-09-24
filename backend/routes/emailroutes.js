import express from 'express'

const router = express.Router()

// In-memory "database" for testing only
let emails = [
  {
    id: 1,
    to: 'receiver@example.com',
    subject: 'Welcome!',
    body: 'This is your first email',
    date: new Date('2023-01-01'),
    read: false,
  },
  {
    id: 2,
    to: 'receiver@example.com',
    subject: 'Follow up',
    body: 'This is your second email',
    date: new Date('2023-01-02'),
    read: true,
  },
]

// -------------------
// Save draft
// -------------------
router.post('/draft', (req, res) => {
  const { subject, body } = req.body

  if (!subject || !body) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const draftId = Date.now()
  return res.status(201).json({ draftId, subject, body })
})

// -------------------
// Send email
// -------------------
router.post('/', (req, res) => {
  const { to, subject, body } = req.body

  if (!to || !subject || !body) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const newEmail = {
    id: Date.now(),
    to,
    subject,
    body,
    date: new Date(),
    read: false,
  }

  emails.push(newEmail)

  return res.status(201).json({ id: newEmail.id })
})

// -------------------
// Inbox (with sorting & filtering)
// -------------------
router.get('/', (req, res) => {
  let result = [...emails]

  // Sort by newest first
  result = result.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Filter unread
  if (req.query.filter === 'unread') {
    result = result.filter(email => !email.read)
  }

  return res.status(200).json(result)
})

export default router
