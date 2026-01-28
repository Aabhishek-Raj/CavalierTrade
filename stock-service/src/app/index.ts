import { createStockUsecase } from "../usecase/createStock";
import { findStockUsecase } from "../usecase/findStock";
import { stockControllerFactory } from "../presentation/controllers/stockControllerFactory";

const controllers = stockControllerFactory({
  createStockUsecase,
  findStockUsecase,
});

export const createStockController = controllers.createStockController;
export const findStockController = controllers.findStockController;
