export interface ProductPageProps {
  product: GetSingleProductQuery_Product | null;
}

export type PageProductParams = {
  productId: string;
};
