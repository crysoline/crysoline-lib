/**
 * @fileoverview Core module exports for all provider categories.
 */

/**
 * Anime streaming provider clients.
 */
export { Anime } from "./anime";

/**
 * Hentai streaming provider clients.
 */
export { Hentai } from "./hentai";

/**
 * Manga reading provider clients.
 */
export { Manga } from "./manga";

/**
 * Cross-provider ID mapping utilities.
 */
export { Mapper } from "./mapper";

/**
 * Metadata aggregation providers (MyAnimeList, AniList).
 */
export { Meta } from "./meta";

/**
 * Video source extraction utilities.
 */
export { Extractor } from "./extractors";
