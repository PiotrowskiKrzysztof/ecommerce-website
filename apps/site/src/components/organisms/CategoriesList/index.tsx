import { GetAllCategories } from "@components/pages/shop/operationTypes/GetAllCategories";
import Link from "next/link";

import * as Styled from "./styles";

const CategoriesList: React.FC<GetAllCategories> = ({
  allMainCategory
}) => {
  return (
    <Styled.Container>
      <Styled.Heading fontSize="fontSize16" fontWeights="bold">
        Categories
      </Styled.Heading>
      {allMainCategory.map((mainCategory) => (
        <>
          <Link
            key={mainCategory?.key}
            href={`/shop/${mainCategory?.name}`}
          >
            <Styled.CategoryTitle>
              {mainCategory?.name}
            </Styled.CategoryTitle>
          </Link>
          {mainCategory?.subCategories.map((subCategory) => (
            <Link
              key={mainCategory?.key}
              href={`/shop/${mainCategory?.name}/${subCategory?.key}`}
            >
              <Styled.CategorySubTitle>
                {subCategory?.name}
              </Styled.CategorySubTitle>
            </Link>
          ))}
        </>
      ))}
    </Styled.Container>
  );
};

export default CategoriesList;
