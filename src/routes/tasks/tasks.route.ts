import { createRoute, z } from '@hono/zod-openapi';
import * as httpStatusCode from 'stoker/http-status-codes';
import { jsonContent } from 'stoker/openapi/helpers';

export const list = createRoute({
   tags: ['Index'],
   path: '/tasks',
   method: 'get',
   responses: {
      [httpStatusCode.OK]: jsonContent(
         z.array(
            z.object({
               name: z.string(),
               done: z.boolean(),
            }),
         ),
         'this is list of task ',
      ),
   },
});

export type ListRoute = typeof list;
