import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

declare const globalThis: {
  __prisma: PrismaClient;
} & typeof global;

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = globalThis.__prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV === "development") {
  globalThis.__prisma = prisma;
}

export default prisma;
