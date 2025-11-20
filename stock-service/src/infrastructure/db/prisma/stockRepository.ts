import { PrismaClient } from "@prisma/client";
import { IStockRepository } from "../../../domain/interfaces/IStockRepository";
import { CreateStockDTO } from "../../../domain/dto/createStockDTO";

export const stockRepository = (prisma: PrismaClient): IStockRepository => ({
  async create(data: CreateStockDTO) {
    return prisma.stock.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description
      },
    });
  },

  async findById(id: string) {
    return prisma.stock.findUnique({
      where: { id },
    });
  },
});
