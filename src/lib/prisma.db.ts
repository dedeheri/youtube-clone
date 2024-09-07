import { PrismaClient } from "@prisma/client";

const gPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = gPrisma?.prisma ?? new PrismaClient();
