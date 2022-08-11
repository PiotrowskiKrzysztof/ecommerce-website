import { GetPageQuery_allPage_sections as CategorySectionProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import { StyledGridBox, StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";

import * as Styled from "./styles";

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  categoriesList
}) => {
  return (
    <Styled.Container>
      <Inner variant="default">
        <Styled.Title variant="h6">{title}</Styled.Title>
        <StyledGridBox
          gridTemplateColumns="repeat(3, 1fr)"
          gridColumnGap="1rem"
        >
          {categoriesList
            ? categoriesList.map((category) => (
                <Styled.Category key={category?.key}>
                  <Styled.CategoryName
                    fontSize="FontSize16"
                    fontWeight="bold"
                  >
                    {category?.name}
                  </Styled.CategoryName>
                  <StyledGridBox
                    gridTemplateColumns="repeat(2, 1fr)"
                    gridTemplateRows="repeat(2, 1fr)"
                    gridGap="1rem"
                  >
                    {category?.subCategories?.map((subCategory) => (
                      <Styled.SubCategories key={subCategory?.key}>
                        {subCategory?.image?.asset?.url && (
                          <Image
                            src={subCategory?.image?.asset?.url}
                            height={70}
                            width={70}
                            layout="responsive"
                          />
                        )}
                        <p>{subCategory?.name}</p>
                      </Styled.SubCategories>
                    ))}
                  </StyledGridBox>
                  <Typography fontSize="fontSize14">
                    See more
                  </Typography>
                </Styled.Category>
              ))
            : null}
        </StyledGridBox>
      </Inner>
    </Styled.Container>
  );
};

export default CategorySection;
