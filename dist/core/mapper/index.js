import { MapperFetch } from '../../helpers/fetch';
const Mapper = (apiKey) => MapperFetch({
    provider: 'mapper',
    apiKey,
});
export { Mapper };
