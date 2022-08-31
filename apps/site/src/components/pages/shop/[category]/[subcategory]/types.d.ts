export interface SubCategoryPageProps {
  allProduct: GetSubCategoryProductsQuery_allProduct[];
  allMainCategory: GetAllCategoriesQuery_allMainCategory[];
}

export type PageSubCategoryParams = {
  category: string;
  subcategory: string;
  reference: string;
};
