import { OpenAPIHono } from '@hono/zod-openapi';
import { PinoLogger } from 'hono-pino';

export interface AppBinding {
   Variables: {
      logger: PinoLogger;
   };
}

export type AppOpenApi = OpenAPIHono<AppBinding>;
