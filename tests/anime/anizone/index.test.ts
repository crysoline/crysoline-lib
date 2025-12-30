import { describe, test, expect } from 'bun:test';
import { Anime } from '../../../src/core/anime';

const API_KEY = process.env.API_KEY as string;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const provider = Anime.AniZone(API_KEY);

describe('AniZone Provider', () => {
  test('search returns results for a common query', async () => {
    const results = await provider.search('One Piece');
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]).toHaveProperty('id');
  });

  test('info returns detailed info for a known anime', async () => {
    const results = await provider.search('One Piece');
    expect(results.length).toBeGreaterThan(0);
    const animeId = results[0].id;
    const info = await provider.info(animeId as string);
    expect(info).toHaveProperty('id');
  });

  test('episodes returns a list for a known anime', async () => {
    const results = await provider.search('One Piece');
    expect(results.length).toBeGreaterThan(0);
    const animeId = results[0].id;
    const episodes = await provider.episodes(animeId as string);
    expect(Array.isArray(episodes)).toBe(true);
  });
});
