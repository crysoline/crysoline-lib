import { MetaFetch } from '../../helpers/fetch';
const MyAnimeList = (apiKey) => MetaFetch({
    provider: 'myanimelist',
    apiKey,
});
const MyMangaList = (apiKey) => MetaFetch({
    provider: 'mymangalist',
    apiKey,
});
const Meta = {
    MyAnimeList,
    MyMangaList,
};
export { Meta };
