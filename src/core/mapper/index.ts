import { MapperFetch } from '../../helpers/fetch';

/**
 * Creates a Mapper API client for converting between provider IDs.
 *
 * **Use this to map AniList IDs to provider-specific IDs.**
 *
 * @param apiKey - Your API key for authentication
 * @returns API client with method: map
 *
 * @example
 * ```ts
 * const mapper = Mapper(process.env.API_KEY);
 *
 * // Map AniList ID to provider ID
 * const mapping = await mapper.map({
 *   id: 21,  // AniList ID for "One Piece"
 *   provider: "animepahe"
 * });
 *
 * console.log(mapping.idMap);  // Provider-specific ID
 * ```
 */
const Mapper = (apiKey: string) =>
  MapperFetch({
    provider: 'mapper',
    apiKey,
  });

export { Mapper };

export * from './types';
