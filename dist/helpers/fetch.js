const fetchFn = (baseUrl, apiKey) => {
    return async (path, params) => {
        const url = new URL(baseUrl + path);
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== undefined && value !== null) {
                    url.searchParams.set(key, String(value));
                }
            }
        }
        const res = await fetch(url.toString(), {
            headers: {
                "x-api-key": apiKey,
            },
        });
        if (!res.ok) {
            throw new Error(`Failed (${res.status}) on ${url.pathname}`);
        }
        return res.json();
    };
};
export class AnimeFetchModule {
    constructor(config) {
        const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;
        this.basePath = `/api/anime/${provider}`;
        this.fetcher = fetchFn(baseUrl, apiKey);
    }
    async search(q) {
        return this.fetcher(`${this.basePath}/search`, {
            q,
        });
    }
    async info(id) {
        return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
    }
    async episodes(id) {
        return this.fetcher(`${this.basePath}/episodes/${encodeURIComponent(id)}`);
    }
    async sources(params) {
        return this.fetcher(`${this.basePath}/sources`, params);
    }
}
export class HentaiFetchModule {
    constructor(config) {
        const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;
        this.basePath = `/api/hentai/${provider}`;
        this.fetcher = fetchFn(baseUrl, apiKey);
    }
    async search(q) {
        return this.fetcher(`${this.basePath}/search`, {
            q,
        });
    }
    async info(id) {
        return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
    }
    async episodes(id) {
        return this.fetcher(`${this.basePath}/episodes/${encodeURIComponent(id)}`);
    }
    async sources(params) {
        return this.fetcher(`${this.basePath}/sources`, params);
    }
}
export class MangaFetchModule {
    constructor(config) {
        const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;
        this.basePath = `/api/manga/${provider}`;
        this.fetcher = fetchFn(baseUrl, apiKey);
    }
    async search(q) {
        return this.fetcher(`${this.basePath}/search`, {
            q,
        });
    }
    async info(id) {
        return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
    }
    async chapters(id) {
        return this.fetcher(`${this.basePath}/chapters/${encodeURIComponent(id)}`);
    }
    async pages(params) {
        return this.fetcher(`${this.basePath}/pages`, params);
    }
}
export class MetaFetchModule {
    constructor(config) {
        const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;
        this.basePath = `/api/meta/${provider}`;
        this.fetcher = fetchFn(baseUrl, apiKey);
    }
    async search(q) {
        return this.fetcher(`${this.basePath}/search`, {
            q,
        });
    }
    async info(id) {
        return this.fetcher(`${this.basePath}/info/${encodeURIComponent(id)}`);
    }
}
export class MapperFetchModule {
    constructor(config) {
        const { baseUrl = "https://api.crysoline.moe", provider, apiKey } = config;
        this.basePath = `/api/${provider}`;
        this.fetcher = fetchFn(baseUrl, apiKey);
    }
    async map(params) {
        return this.fetcher(`${this.basePath}/map`, params);
    }
}
export const AnimeFetch = (config) => new AnimeFetchModule(config);
export const HentaiFetch = (config) => new HentaiFetchModule(config);
export const MangaFetch = (config) => new MangaFetchModule(config);
export const MetaFetch = (config) => new MetaFetchModule(config);
export const MapperFetch = (config) => new MapperFetchModule(config);
