import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
import { server } from './mocks/node.js';
import { consoleError } from './mocks/mock.js';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  consoleError.mockRestore();
});

afterAll(() => {
  server.close();
});
