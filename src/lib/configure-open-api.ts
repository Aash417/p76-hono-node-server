import { apiReference } from '@scalar/hono-api-reference';

import type { AppOpenApi } from '@/lib/types';

import packageJSON from '../../package.json' with { type: 'json' };

export default function configureOpenApi(app: AppOpenApi) {
   app.doc('/docs', {
      openapi: '3.0.0',
      info: {
         version: packageJSON.version,
         title: 'hono node api',
      },
   }),
      app.get(
         '/reference',
         apiReference({
            spec: {
               url: '/docs',
            },
            layout: 'classic',
            theme: 'kepler',
            defaultHttpClient: {
               targetKey: 'javascript',
               clientKey: 'fetch',
            },
         }),
      );
}
