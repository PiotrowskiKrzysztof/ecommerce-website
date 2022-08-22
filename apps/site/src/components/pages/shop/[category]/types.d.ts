export interface CategoryPageProps {
  name: string | null;
  allCategoryProducts: GetCategoryProductsQuery_allProduct[];
  allMainCategory: GetAllCategories_allMainCategory[];
}

export type PageCategoryParams = {
  category: string;
};
