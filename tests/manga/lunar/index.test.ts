import { describe, test, expect } from 'bun:test';
import { Manga } from '../../../src/core/manga';

const API_KEY = process.env.API_KEY as string;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const provider = Manga.LunarManga(API_KEY);

describe('LunarManga Provider', () => {
  test('search returns results for a common query', async () => {
    const results = await provider.search('One Piece');
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]).toHaveProperty('id');
  });

  test('info returns detailed info for a known manga', async () => {
    const results = await provider.search('One Piece');
    expect(results.length).toBeGreaterThan(0);
    const mangaId = results[0].id;
    const info = await provider.info(mangaId as string);
    expect(info).toHaveProperty('id');
  });

  test('chapters returns a list for a known manga', async () => {
    const results = await provider.search('One Piece');
    expect(results.length).toBeGreaterThan(0);
    const mangaId = results[0].id;
    const chapters = await provider.chapters(mangaId as string);
    expect(Array.isArray(chapters)).toBe(true);
  });
});
