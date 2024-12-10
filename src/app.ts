import { OpenAPIHono } from '@hono/zod-openapi';
import type { PinoLogger } from 'hono-pino';
import { notFound, onError } from 'stoker/middlewares';
import { pinoLogger } from './middlewares/pino-logger';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

expand(config());

type AppBinding = {
   Variables: {
      logger: PinoLogger;
   };
};

const app = new OpenAPIHono<AppBinding>();

app.use(pinoLogger());

app.get('/', (c) => {
   return c.text('Hello Hono!');
});

app.get('/er', (c) => {
   throw new Error('ho no');
});

app.notFound(notFound);
app.onError(onError);

export default app;
