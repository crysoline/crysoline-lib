import { KodikFetch } from '../../helpers/fetch';

const Kodik = (apiKey: string) =>
  KodikFetch({
    provider: 'kodik',
    apiKey,
  });

const Extractor = {
  Kodik,
};

export { Extractor };

export * from './kodik';
