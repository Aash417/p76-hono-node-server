import { PrismaClient } from '@prisma/client';
import { env } from 'process';

function prismaClientSingleton() {
   return new PrismaClient();
}

declare const globalThis: {
   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton();

export default db;

if (env.NODE_ENV !== 'production') globalThis.prismaGlobal = db;
