import { MapperFetch } from '../../helpers/fetch';

const Mapper = (apiKey: string) =>
  MapperFetch({
    provider: 'mapper',
    apiKey,
  });

export { Mapper };
