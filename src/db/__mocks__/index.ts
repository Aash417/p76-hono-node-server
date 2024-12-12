import type { PrismaClient } from '@prisma/client';
import type { DeepMockProxy } from 'vitest-mock-extended';

import { beforeEach } from 'vitest';
import { mockDeep, mockReset } from 'vitest-mock-extended';

export const db = mockDeep<PrismaClient>();

beforeEach(() => {
   mockReset(db);
});

export type MockPrismaClient = DeepMockProxy<PrismaClient>;
