import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    hookTimeout: 30000, // 30 seconds for hooks
    testTimeout: 60000, // 60 seconds for tests
    teardownTimeout: 30000, // 30 seconds for cleanup
  },
});