import { PrismaClient } from "@prisma/client";
import { IProductRepository } from "../../../domain/interfaces/IProductRepository";
import { CreateProductDTO } from "../../../domain/dto/createProductDTO";

export const productRepository = (prisma: PrismaClient): IProductRepository => ({
  async create(data: CreateProductDTO) {
    return prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description
      },
    });
  },

  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  },
});
