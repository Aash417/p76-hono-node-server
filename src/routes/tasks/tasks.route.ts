import { createRoute, z } from '@hono/zod-openapi';
import * as httpStatusCode from 'stoker/http-status-codes';
import {
   jsonContent,
   jsonContentOneOf,
   jsonContentRequired,
} from 'stoker/openapi/helpers';
import { createErrorSchema, IdParamsSchema } from 'stoker/openapi/schemas';

import { notFoundSchema } from '@/lib/constants';
import { tasksSchema } from 'prisma/generated/zod';

const insertTaskSchema = tasksSchema.omit({
   id: true,
   createdAt: true,
   updatedAt: true,
});
const extendedInsertSchema = insertTaskSchema.extend({
   name: insertTaskSchema.shape.name.min(1, 'Name is required'),
});
const patchTaskSchema = extendedInsertSchema.partial();

const tags = ['Tasks'];

export const list = createRoute({
   tags,
   path: '/tasks',
   method: 'get',
   responses: {
      [httpStatusCode.OK]: jsonContent(
         z.array(tasksSchema),
         'This is list of task ',
      ),
   },
});

export const create = createRoute({
   tags,
   path: '/tasks',
   method: 'post',
   request: {
      body: jsonContentRequired(extendedInsertSchema, 'The task to create'),
   },
   responses: {
      [httpStatusCode.OK]: jsonContent(tasksSchema, 'Created task'),
      [httpStatusCode.UNPROCESSABLE_ENTITY]: jsonContent(
         createErrorSchema(insertTaskSchema),
         'The validation error',
      ),
   },
});

export const getOne = createRoute({
   tags,
   path: '/task/{id}',
   method: 'get',
   request: {
      params: IdParamsSchema,
   },
   responses: {
      [httpStatusCode.OK]: jsonContent(tasksSchema, 'A task'),
      [httpStatusCode.NOT_FOUND]: jsonContent(notFoundSchema, 'Task not found'),
      [httpStatusCode.UNPROCESSABLE_ENTITY]: jsonContent(
         createErrorSchema(IdParamsSchema),
         'Invalid Id',
      ),
   },
});

export const patch = createRoute({
   tags,
   path: '/task/{id}',
   method: 'patch',
   request: {
      params: IdParamsSchema,
      body: jsonContentRequired(patchTaskSchema, 'Task to update'),
   },
   responses: {
      [httpStatusCode.OK]: jsonContent(tasksSchema, 'Created task'),
      [httpStatusCode.NOT_FOUND]: jsonContent(notFoundSchema, 'Task not found'),
      [httpStatusCode.UNPROCESSABLE_ENTITY]: jsonContentOneOf(
         [
            createErrorSchema(insertTaskSchema),
            createErrorSchema(IdParamsSchema),
         ],

         'The validation error',
      ),
   },
});

export const remove = createRoute({
   tags,
   path: '/task/{id}',
   method: 'delete',
   request: {
      params: IdParamsSchema,
   },
   responses: {
      [httpStatusCode.NO_CONTENT]: { description: 'Task deleted' },
      [httpStatusCode.NOT_FOUND]: jsonContent(notFoundSchema, 'Task not found'),
      [httpStatusCode.UNPROCESSABLE_ENTITY]: jsonContent(
         createErrorSchema(IdParamsSchema),
         'Invalid Id',
      ),
   },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
export type PatchRoute = typeof patch;
export type RemoveRoute = typeof remove;
