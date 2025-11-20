import { createProductUsecase } from "../usecase/createProduct";
import { findProductUsecase } from "../usecase/findProduct";
import { productControllerFactory } from "../presentation/controllers/productControllerFactory";

const controllers = productControllerFactory({
  createProductUsecase,
  findProductUsecase,
});

export const createProductController = controllers.createProductController;
export const findProductController = controllers.findProductController;
