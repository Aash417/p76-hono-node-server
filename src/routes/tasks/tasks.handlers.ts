import * as httpStatusCode from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import type { AppRouteHandler } from '@/lib/types';
import type {
   CreateRoute,
   GetOneRoute,
   ListRoute,
} from '@/routes/tasks/tasks.route';

import db from '@/db';

export const list: AppRouteHandler<ListRoute> = async (c) => {
   const tasks = await db.tasks.findMany();

   return c.json(tasks);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
   const task = c.req.valid('json');

   const createdTask = await db.tasks.create({
      data: task,
   });

   return c.json(createdTask, httpStatusCode.OK);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
   const { id } = c.req.param();

   const task = await db.tasks.findFirst({
      where: {
         id: Number(id),
      },
   });
   if (!task) {
      return c.json(
         { message: HttpStatusPhrases.NOT_FOUND },
         httpStatusCode.NOT_FOUND,
      );
   }

   return c.json(task, httpStatusCode.OK);
};
