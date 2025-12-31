# Crysoline Library

**Crysoline Library** is a modular and extensible TypeScript library designed for anime, manga, and meta-data parsing and handling. The library offers specific modules for various platforms, all neatly categorized for ease of use and maintainability.

## Features

- **Anime Parsers**: Support for platforms like 123Anime, AnimeHeaven, AnimePahe and so on...
- **Hentai Parsers**: Parsing modules for services like Hanime, HentaiHaven and more...
- **Manga Parsers**: Support for platforms like MangaDex, MangaFire, and more...
- **Meta Data Integration**: Integration for meta platforms like MyAnimeList and MyMangaList.
- **Mapper Utilities**: Custom mappers for complex mapping scenarios.
- **Modular Design**: Add or remove modules according to your specific needs.

## Installation

```bash
bun install @crysoline/lib
```

## Usage

Import any module to get started.

### Example

Here’s how you might fetch data from AnimePahe:

```typescript
import { Anime } from 'crysoline-lib/src/core/anime';

const API_KEY = 'your-api-key';
const animePahe = Anime.AnimePahe(API_KEY);

(async () => {
  // Search for an anime
  const searchResults = await animePahe.search('Bleach');
  console.log('Search Results:', searchResults);

  // Get detailed info about the first anime in the search results
  const animeId = searchResults[0].id;
  const animeInfo = await animePahe.info(animeId);
  console.log('Anime Info:', animeInfo);

  // Get episodes for the anime
  const episodes = await animePahe.episodes(animeId);
  console.log('Episodes:', episodes);
})();
```

## Development

To contribute, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/crysoline/crysoline-lib.git
cd crysoline-lib
bun install
```

Run the project with the following:

```bash
bun run build
```

## File Structure

The project is organized to facilitate modularity:

```
src/
  core/
    anime/       --> Anime parsing modules
    hentai/      --> Hentai parsing modules
    manga/       --> Manga parsing modules
    mapper/      --> Mapper utilities
    meta/        --> Meta-data integration modules
```

## Contributing

We welcome contributions! Fork the project, create a new branch, and submit a pull request.

## License

Check the [LICENSE](LICENSE) file for details.

## Note

We use Bun as our runtime environment although it should be compatible with other envs too. If you encounter any issues, please open an issue on GitHub.

