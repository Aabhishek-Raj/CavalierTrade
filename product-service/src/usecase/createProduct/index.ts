import { prisma } from "../../infrastructure/db/prisma/client";
import { productRepository as prismaRepo } from "../../infrastructure/db/prisma/productRepository";
import { productRepository as drizzleRepo } from "../../infrastructure/db/drizzle/productRepository";
import { createProductUsecaseFactory } from "./factory";

const isDrizzle = process.env.DB === "drizzle";

const repo = isDrizzle ? drizzleRepo(): prismaRepo(prisma)


export const createProductUsecase = createProductUsecaseFactory({
  productRepository: repo,
});
