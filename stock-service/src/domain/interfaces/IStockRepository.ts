import { CreateStockDTO } from "../dto/createStockDTO";

export interface IStockRepository {
  create: (data: CreateStockDTO) => Promise<any>;
  findById: (id: string) => Promise<any | null>; // New method
}
