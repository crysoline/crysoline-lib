import { MangaFetch } from '../../helpers/fetch';
const LunarManga = (apiKey) => MangaFetch({
    provider: 'lunarmanga',
    apiKey,
});
const MangaDex = (apiKey) => MangaFetch({
    provider: 'mangadex',
    apiKey,
});
const MangaFire = (apiKey) => MangaFetch({
    provider: 'mangafire',
    apiKey,
});
const Manga = {
    LunarManga,
    MangaDex,
    MangaFire,
};
export { Manga };
