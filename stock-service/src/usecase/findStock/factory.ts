import { IStockRepository } from "../../domain/interfaces/IStockRepository";

export const findStockUsecaseFactory = ({ stockRepository }: { stockRepository: IStockRepository }) => {
  return async function findStockUsecase({ id }: { id: string }) {
    if (!id) throw new Error("Stock ID is required");

    const stock = await stockRepository.findById(id);
    if (!stock) {
      throw new Error("User not found");
    }

    return stock;
  };
};
