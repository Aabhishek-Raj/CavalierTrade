export const productEntityFactory = () => {
  return function productEntity({ name, price, description }: { name: string; price: number, description: string }) {
    if (!name) throw new Error("Name is required");
    if (!price) throw new Error("Price is required");

    return Object.freeze({
      getName: () => name,
      getPrice: () => price,
      getDescription: () => description
    });
  };
};
