import { connectTestDB, disconnectTestDB, clearTestDB } from '../config/mongo.ts';
import request from 'supertest';
import app from '../../app'; // your Express app

describe('Email API Tests', () => {
  beforeAll(async () => {
    await connectTestDB();
  });

  afterAll(async () => {
    await disconnectTestDB();
  });

  afterEach(async () => {
    await clearTestDB();
  });

  it('US-2: should open compose window', async () => {
    // your test logic here
    const res = await request(app).get('/api/compose');
    expect(res.status).toBe(200);
  });

  it('US-2: should send an email successfully', async () => {
    const emailPayload = { to: 'test@example.com', subject: 'Hello', body: 'World' };
    const res = await request(app).post('/api/send-email').send(emailPayload);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Email sent');
  });

  it('US-3: should list emails sorted by newest', async () => {
    // insert test emails into DB first, then test listing
  });

  it('US-3: should filter unread emails', async () => {
    // insert test emails with read/unread flags, then test filtering
  });
});
