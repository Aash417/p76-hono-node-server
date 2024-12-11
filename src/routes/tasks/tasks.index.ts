import { createRouter } from '@/lib/create-app';
import * as handler from '@/routes/tasks/tasks.handlers';
import * as routes from '@/routes/tasks/tasks.route';

export const tasks = createRouter().openapi(routes.list, handler.list);
