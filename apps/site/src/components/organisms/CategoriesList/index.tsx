import { GetAllCategories } from "@components/pages/shop/operationTypes/GetAllCategories";
import Link from "next/link";

import * as Styled from "./styles";

const CategoriesList: React.FC<GetAllCategories> = ({
  allMainCategory
}) => {
  return (
    <Styled.Container>
      {allMainCategory.map((mainCategory) => (
        <Link href="/">
          <Styled.CategoryTitle>
            {mainCategory?.name}
          </Styled.CategoryTitle>
        </Link>
      ))}
    </Styled.Container>
  );
};

export default CategoriesList;
