import { AnimeFetch } from '../../helpers/fetch';
const OneTwoThreeAnime = (apiKey) => AnimeFetch({
    provider: 'onetwothreeanime',
    apiKey,
});
const AnimeParadise = (apiKey) => AnimeFetch({
    provider: 'animeparadise',
    apiKey,
});
const AnimeHeaven = (apiKey) => AnimeFetch({
    provider: 'animeheaven',
    apiKey,
});
const AnimeKai = (apiKey) => AnimeFetch({
    provider: 'animekai',
    apiKey,
});
const AnimeNexus = (apiKey) => AnimeFetch({
    provider: 'animenexus',
    apiKey,
});
const AnimeOnsen = (apiKey) => AnimeFetch({
    provider: 'animeonsen',
    apiKey,
});
const AnimePahe = (apiKey) => AnimeFetch({
    provider: 'animepahe',
    apiKey,
});
const AniZone = (apiKey) => AnimeFetch({
    provider: 'anizone',
    apiKey,
});
const HiAnime = (apiKey) => AnimeFetch({
    provider: 'hianime',
    apiKey,
});
const KickAssAnime = (apiKey) => AnimeFetch({
    provider: 'kickassanime',
    apiKey,
});
const LunarAnime = (apiKey) => AnimeFetch({
    provider: 'lunaranime',
    apiKey,
});
const UniqueStream = (apiKey) => AnimeFetch({
    provider: 'uniquestream',
    apiKey,
});
const Anime = {
    OneTwoThreeAnime,
    AnimeParadise,
    AnimeHeaven,
    AnimeKai,
    AnimeNexus,
    AnimeOnsen,
    AnimePahe,
    AniZone,
    HiAnime,
    KickAssAnime,
    LunarAnime,
    UniqueStream,
};
export { Anime };
