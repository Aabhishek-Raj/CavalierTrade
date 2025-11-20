import { prisma } from "../../infrastructure/db/prisma/client";
import { findProductUsecaseFactory } from "./factory";

import { productRepository as prismaRepo } from "../../infrastructure/db/prisma/productRepository";
import { productRepository as drizzleRepo } from "../../infrastructure/db/drizzle/productRepository";

const isDrizzle = process.env.DB === 'drizzle'

const repo = isDrizzle ? drizzleRepo(): prismaRepo(prisma)

export const findProductUsecase = findProductUsecaseFactory({
  productRepository: repo,
});
