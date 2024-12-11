import { createRouter } from '@/lib/create-app';
import { createRoute, z } from '@hono/zod-openapi';
import { jsonContent } from 'stoker/openapi/helpers';
import * as httpStatusCodes from 'stoker/http-status-codes';
import { createMessageObjectSchema } from 'stoker/openapi/schemas';

export const index = createRouter().openapi(
   createRoute({
      tags: ['Index'],
      method: 'get',
      path: '/',
      responses: {
         [httpStatusCodes.OK]: jsonContent(
            createMessageObjectSchema('stoker custom message'),
            'api index',
         ),
      },
   }),

   (c) => {
      return c.json(
         {
            message: 'hono node api',
         },
         httpStatusCodes.OK,
      );
   },
);
