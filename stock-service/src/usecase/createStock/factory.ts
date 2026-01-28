import { IStockRepository } from "../../domain/interfaces/IStockRepository";
import { CreateStockDTO } from "../../domain/dto/createStockDTO";
import { stockEntityFactory } from "../../domain/entities/stockEntity";

export const createStockUsecaseFactory = ({ stockRepository }: { stockRepository: IStockRepository }) => {
  return async function createStockUsecase({ body }: { body: CreateStockDTO }) {
    const makeStock = stockEntityFactory();
    const stock = makeStock(body);

    return stockRepository.create({
      name: stock.getName(),
      price: stock.getPrice(),
      description: stock.getDescription()
    });
  };
};
