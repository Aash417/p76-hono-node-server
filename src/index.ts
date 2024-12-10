import { serve } from '@hono/node-server';
import app from './app';

const port = Number(process.env.PORT) || 3003;

console.log(`Server is running on http://localhost:${port}`);

serve({
   fetch: app.fetch,
   port,
});
