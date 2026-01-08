/**
 * @fileoverview Main entry point for Crysoline - a comprehensive anime, manga, and hentai API client library.
 * @module crysoline
 */

/**
 * Anime provider clients for various streaming sites.
 * @see {@link Anime}
 */
export { Anime, Hentai, Manga, Mapper, Meta, Extractor } from "./core";

/**
 * Core type definitions for anime/manga data structures.
 */
export * from "./core/types";
