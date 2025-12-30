import { describe, test, expect } from 'bun:test';
import { Hentai } from '../../../src/core/hentai';

const API_KEY = process.env.API_KEY as string;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const provider = Hentai.HStream(API_KEY);

describe('HStream Provider', () => {
  test('search returns results for a common query', async () => {
    const results = await provider.search('Futanari');
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]).toHaveProperty('id');
  });
});
