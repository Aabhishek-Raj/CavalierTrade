import { prisma } from "../../infrastructure/db/prisma/client";
import { stockRepository as prismaRepo } from "../../infrastructure/db/prisma/stockRepository";
import { stockRepository as drizzleRepo } from "../../infrastructure/db/drizzle/stockRepository";
import { createStockUsecaseFactory } from "./factory";

const isDrizzle = process.env.DB === "drizzle";

const repo = isDrizzle ? drizzleRepo(): prismaRepo(prisma)


export const createStockUsecase = createStockUsecaseFactory({
  stockRepository: repo,
});
