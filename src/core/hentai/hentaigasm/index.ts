import { HentaiFetch } from '../../../helpers';
import type { HentaigasmInfoMeta, HentaigasmSearchMeta } from './types';

export const Hentaigasm = (apiKey: string) =>
  HentaiFetch<HentaigasmSearchMeta, HentaigasmInfoMeta>({
    provider: 'hentaigasm',
    apiKey,
  });
