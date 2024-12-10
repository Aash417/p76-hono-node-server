import { OpenAPIHono } from '@hono/zod-openapi';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import type { PinoLogger } from 'hono-pino';
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares';
import { pinoLogger } from '../middlewares/pino-logger';

expand(config());

type AppBinding = {
   Variables: {
      logger: PinoLogger;
   };
};

export default function createApp() {
   const app = new OpenAPIHono<AppBinding>({ strict: false });

   app.use(serveEmojiFavicon('🔥'));
   app.use(pinoLogger());

   app.notFound(notFound);
   app.onError(onError);

   return app;
}
