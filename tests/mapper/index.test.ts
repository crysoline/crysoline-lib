import { describe, test, expect } from 'bun:test';
import { Mapper } from '../../src/core/mapper';

const API_KEY = process.env.API_KEY as string;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const provider = Mapper(API_KEY);

describe('Mapper Provider', () => {
  test('map returns a mapping for a known id and provider', async () => {
    const result = await provider.map({ id: 1, provider: 'animepahe' });
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });
});
