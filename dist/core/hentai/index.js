import { HentaiFetch } from '../../helpers/fetch';
const HAnime = (apiKey) => HentaiFetch({
    provider: 'hanime',
    apiKey,
});
const HentaiHaven = (apiKey) => HentaiFetch({
    provider: 'hentaihaven',
    apiKey,
});
const HStream = (apiKey) => HentaiFetch({
    provider: 'hstream',
    apiKey,
});
const Hentai = {
    HAnime,
    HentaiHaven,
    HStream,
};
export { Hentai };
