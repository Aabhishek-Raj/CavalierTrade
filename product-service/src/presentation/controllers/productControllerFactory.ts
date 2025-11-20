export const productControllerFactory = ({
  createProductUsecase,
  findProductUsecase,
}: {
  createProductUsecase: any;
  findProductUsecase: any;
}) => {
  return {
    createProductController: async ({ body }: any) => {
      const result = await createProductUsecase({ body });
      return {
        statusCode: 201,
        body: result,
      };
    },

    findProductController: async ({ params }: any) => {
      const result = await findProductUsecase({ id: params.id });
      return {
        statusCode: 200,
        body: result,
      };
    },
  };
};
