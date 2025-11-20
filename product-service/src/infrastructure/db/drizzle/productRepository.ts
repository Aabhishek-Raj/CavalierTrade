import { db } from "./client";
import { productsTable } from "./schema";
import { IProductRepository } from "../../../domain/interfaces/IProductRepository";
import { CreateProductDTO } from "../../../domain/dto/createProductDTO";
import { eq } from "drizzle-orm";

export const productRepository = (): IProductRepository => ({
  async create(data: CreateProductDTO) {
    const [user] = await db.insert(productsTable).values({
      name: data.name,
      price: data.price,
      description: data.description
    }).returning();
    return user;
  },

  async findById(id: string) {
    const result = await db.select().from(productsTable).where(eq(productsTable.id, Number(id)));
    return result[0] || null;
  },
});
