import { PrismaClient } from '@prisma/client';
import { env } from 'node:process';

function prismaClientSingleton() {
   return new PrismaClient();
}

declare const globalThis: {
   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const db = globalThis.prismaGlobal ?? prismaClientSingleton();

if (env.NODE_ENV !== 'production') globalThis.prismaGlobal = db;
