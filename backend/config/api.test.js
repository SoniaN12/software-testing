const { connectTestDB, disconnectTestDB, clearTestDB } = require('../config/mongo.ts');
const request = require('supertest');
const app = require('../../app'); // your Express app

describe('Email API Endpoints', () => {
  beforeAll(async () => {
    await connectTestDB();
  });

  afterAll(async () => {
    await disconnectTestDB();
  });

  afterEach(async () => {
    await clearTestDB();
  });

  it('GET /api/health should return status 200', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
  });

  it('GET /api/users should return user list', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 200 when emails authenticated', async () => {
    const res = await request(app).get('/api/emails').set('Authorization', 'Bearer testtoken');
    expect(res.status).toBe(200);
  });
});
