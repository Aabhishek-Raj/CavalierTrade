import { IProductRepository } from "../../domain/interfaces/IProductRepository";

export const findProductUsecaseFactory = ({ productRepository }: { productRepository: IProductRepository }) => {
  return async function findProductUsecase({ id }: { id: string }) {
    if (!id) throw new Error("Product ID is required");

    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error("User not found");
    }

    return product;
  };
};
