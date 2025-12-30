import { describe, test, expect } from 'bun:test';
import { Hentai } from '../../../src/core/hentai';

const API_KEY = process.env.API_KEY as string;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const provider = Hentai.HentaiHaven(API_KEY);

describe('HentaiHaven Provider', () => {
  test('search returns results for a common query', async () => {
    const results = await provider.search('Overflow');
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]).toHaveProperty('id');
  });

  test('info returns detailed info for a known hentai', async () => {
    const results = await provider.search('Overflow');
    expect(results.length).toBeGreaterThan(0);
    const hentaiId = results[0].id;
    const info = await provider.info(hentaiId as string);
    expect(info).toHaveProperty('id');
  });

  test('episodes returns a list for a known hentai', async () => {
    const results = await provider.search('Overflow');
    expect(results.length).toBeGreaterThan(0);
    const hentaiId = results[0].id;
    const episodes = await provider.episodes(hentaiId as string);
    expect(Array.isArray(episodes)).toBe(true);
  });
});
