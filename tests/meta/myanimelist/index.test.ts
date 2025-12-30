import { describe, test, expect } from 'bun:test';
import { Meta } from '../../../src/core/meta';

const API_KEY = process.env.API_KEY as string;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const provider = Meta.MyAnimeList(API_KEY);

describe('MyAnimeList Provider', () => {
  test('search returns results for a common query', async () => {
    const results = await provider.search('Naruto');
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]).toHaveProperty('id');
    expect(results[0]).toHaveProperty('title');
  });

  test('info returns detailed info for a known anime', async () => {
    const results = await provider.search('Naruto');
    expect(results.length).toBeGreaterThan(0);
    const animeId = results[0].id;
    const info = await provider.info(animeId as string);
    expect(info).toHaveProperty('id');
  });
});
