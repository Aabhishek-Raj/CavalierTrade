import { CreateProductDTO } from "../dto/createProductDTO";

export interface IProductRepository {
  create: (data: CreateProductDTO) => Promise<any>;
  findById: (id: string) => Promise<any | null>; // New method
}
