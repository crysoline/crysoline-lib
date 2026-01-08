import { KodikFetch } from "../../helpers/fetch";

/**
 * Creates a Kodik video extractor client.
 *
 * **Kodik is a popular video hosting service used by many anime sites.**
 * Use this to extract direct video sources from Kodik links.
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with methods: episodes, sources, translations
 *
 * @example
 * ```ts
 * const kodik = Kodik(process.env.API_KEY);
 *
 * // Get available translations
 * const translations = await kodik.translations("content-id");
 *
 * // Get episodes
 * const episodes = await kodik.episodes("content-id");
 *
 * // Extract video sources
 * const sources = await kodik.sources({
 *   id: "content-id",
 *   episodeId: episodes[0].id
 * });
 * ```
 */
const Kodik = (apiKey: string) =>
  KodikFetch({
    provider: "kodik",
    apiKey,
  });

/**
 * Collection of video source extractor clients.
 *
 * Extractors fetch direct video URLs from hosting services,
 * bypassing the need to scrape individual provider websites.
 *
 * @example
 * ```ts
 * import { Extractor } from "crysoline";
 *
 * const kodik = Extractor.Kodik(process.env.API_KEY);
 * const sources = await kodik.sources({
 *   id: "content-id",
 *   episodeId: "ep-1"
 * });
 * console.log(sources.sources[0].url); // Direct video URL
 * ```
 */
const Extractor = {
  Kodik,
};

export { Extractor };
