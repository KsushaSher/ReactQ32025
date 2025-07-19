import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
import { server } from './mocks/node.js';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
