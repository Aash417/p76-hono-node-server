import createApp from './lib/create-app';

const app = createApp();

app.get('/', (c) => {
   return c.text('Hello Hono!');
});

app.get('/error', (c) => {
   throw new Error('ho no');
});

export default app;
