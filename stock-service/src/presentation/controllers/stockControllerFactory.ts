export const stockControllerFactory = ({
  createStockUsecase,
  findStockUsecase,
}: {
  createStockUsecase: any;
  findStockUsecase: any;
}) => {
  return {
    createStockController: async ({ body }: any) => {
      const result = await createStockUsecase({ body });
      return {
        statusCode: 201,
        body: result,
      };
    },

    findStockController: async ({ params }: any) => {
      const result = await findStockUsecase({ id: params.id });
      return {
        statusCode: 200,
        body: result,
      };
    },
  };
};
