import { prisma } from "../../infrastructure/db/prisma/client";
import { findStockUsecaseFactory } from "./factory";

import { stockRepository as prismaRepo } from "../../infrastructure/db/prisma/stockRepository";
import { stockRepository as drizzleRepo } from "../../infrastructure/db/drizzle/stockRepository";

const isDrizzle = process.env.DB === 'drizzle'

const repo = isDrizzle ? drizzleRepo(): prismaRepo(prisma)

export const findStockUsecase = findStockUsecaseFactory({
  stockRepository: repo,
});
