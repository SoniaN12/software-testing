// tests/app.test.js
import { describe, it, expect } from 'vitest'

// Simple test to verify Vitest is working
describe('Basic Test Suite', () => {
  it('should pass basic arithmetic', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle async operations', async () => {
    const result = await Promise.resolve('success')
    expect(result).toBe('success')
  })
})