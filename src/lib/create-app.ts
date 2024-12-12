import { OpenAPIHono } from '@hono/zod-openapi';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { logger } from 'hono/logger';
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares';
import { defaultHook } from 'stoker/openapi';

import type { AppBinding, AppOpenApi } from '@/lib/types';

expand(config());

export default function createApp() {
   const app = createRouter();

   app.use(serveEmojiFavicon('🔥'));
   app.use(logger());

   // for detailed logs use pino logger.
   // app.use(pinoLogger());

   app.notFound(notFound);
   app.onError(onError);

   return app;
}

export function createRouter() {
   return new OpenAPIHono<AppBinding>({
      strict: false,
      defaultHook,
   });
}

export function createTestApp(router: AppOpenApi) {
   const testApp = createApp();

   testApp.route('/', router);

   return testApp;
}
