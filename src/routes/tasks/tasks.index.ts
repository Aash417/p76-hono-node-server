import { createRouter } from '@/lib/create-app';
import * as handler from '@/routes/tasks/tasks.handlers';
import * as routes from '@/routes/tasks/tasks.route';

export const tasks = createRouter()
   .openapi(routes.list, handler.list)
   .openapi(routes.create, handler.create)
   .openapi(routes.getOne, handler.getOne)
   .openapi(routes.patch, handler.patch)
   .openapi(routes.remove, handler.remove);
