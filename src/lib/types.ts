import type { OpenAPIHono, RouteConfig, RouteHandler } from '@hono/zod-openapi';
import type { PinoLogger } from 'hono-pino';

export interface AppBinding {
   Variables: {
      logger: PinoLogger;
   };
}

export type AppOpenApi = OpenAPIHono<AppBinding>;

export type AppRouteHandler<t extends RouteConfig> = RouteHandler<
   t,
   AppBinding
>;
