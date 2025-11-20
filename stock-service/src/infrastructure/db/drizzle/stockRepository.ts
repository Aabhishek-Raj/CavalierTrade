import { db } from "./client";
import { stocksTable } from "./schema";
import { IStockRepository } from "../../../domain/interfaces/IStockRepository";
import { CreateStockDTO } from "../../../domain/dto/createStockDTO";
import { eq } from "drizzle-orm";

export const stockRepository = (): IStockRepository => ({
  async create(data: CreateStockDTO) {
    const [user] = await db.insert(stocksTable).values({
      name: data.name,
      price: data.price,
      description: data.description
    }).returning();
    return user;
  },

  async findById(id: string) {
    const result = await db.select().from(stocksTable).where(eq(stocksTable.id, Number(id)));
    return result[0] || null;
  },
});
