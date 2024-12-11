import configureOpenApi from '@/lib/configure-open-api';
import createApp from '@/lib/create-app';
import { index } from '@/routes/index.route';
import { tasks } from '@/routes/tasks/tasks.index';

const app = createApp();
const routes = [index, tasks];

configureOpenApi(app);

routes.forEach((route) => {
   app.route('/', route);
});

export default app;
