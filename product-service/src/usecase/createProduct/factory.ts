import { IProductRepository } from "../../domain/interfaces/IProductRepository";
import { CreateProductDTO } from "../../domain/dto/createProductDTO";
import { productEntityFactory } from "../../domain/entities/productEntity";

export const createProductUsecaseFactory = ({ productRepository }: { productRepository: IProductRepository }) => {
  return async function createProductUsecase({ body }: { body: CreateProductDTO }) {
    const makeProduct = productEntityFactory();
    const product = makeProduct(body);

    return productRepository.create({
      name: product.getName(),
      price: product.getPrice(),
      description: product.getDescription()
    });
  };
};
