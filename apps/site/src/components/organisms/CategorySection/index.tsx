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
        <Styled.Title variant="h3">{title}</Styled.Title>
        <StyledGridBox
          gridTemplateColumns="repeat(3, 1fr)"
          gridColumnGap="1rem"
        >
          {categoriesList
            ? categoriesList.slice(0, 4).map((category) => {
                if (category?.subCategories?.length === 4) {
                  return (
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
                        {category?.subCategories?.map(
                          (subCategory) => (
                            <Styled.SubCategories
                              key={subCategory?.key}
                            >
                              {subCategory?.image?.asset?.url && (
                                <Image
                                  src={subCategory?.image?.asset?.url}
                                  height={70}
                                  width={70}
                                  layout="responsive"
                                />
                              )}
                              <Styled.SubCategoryName>
                                {subCategory?.name}
                              </Styled.SubCategoryName>
                            </Styled.SubCategories>
                          )
                        )}
                      </StyledGridBox>

                      <Typography fontSize="fontSize14">
                        See more
                      </Typography>
                    </Styled.Category>
                  );
                } else if (category?.subCategories?.length === 3) {
                  return (
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
                        {category?.subCategories?.map(
                          (subCategory, index) => {
                            const isFirst = index === 0;
                            return (
                              <Styled.SubCategories
                                key={subCategory?.key}
                                {...{ isFirst }}
                              >
                                {subCategory?.image?.asset?.url && (
                                  <Image
                                    src={
                                      subCategory?.image?.asset?.url
                                    }
                                    height={70}
                                    width={isFirst ? 140 : 70}
                                    layout="responsive"
                                  />
                                )}
                                <Styled.SubCategoryName>
                                  {subCategory?.name}
                                </Styled.SubCategoryName>
                              </Styled.SubCategories>
                            );
                          }
                        )}
                      </StyledGridBox>

                      <Typography fontSize="fontSize14">
                        See more
                      </Typography>
                    </Styled.Category>
                  );
                } else if (category?.subCategories?.length === 2) {
                  return (
                    <Styled.Category key={category?.key}>
                      <Styled.CategoryName
                        fontSize="FontSize16"
                        fontWeight="bold"
                      >
                        {category?.name}
                      </Styled.CategoryName>

                      <StyledGridBox
                        gridTemplateColumns="repeat(1, 1fr)"
                        gridTemplateRows="repeat(2, 1fr)"
                        gridGap="1rem"
                      >
                        {category?.subCategories?.map(
                          (subCategory, index) => {
                            return (
                              <Styled.SubCategories
                                key={subCategory?.key}
                              >
                                {subCategory?.image?.asset?.url && (
                                  <Image
                                    src={
                                      subCategory?.image?.asset?.url
                                    }
                                    height={70}
                                    width={140}
                                    layout="responsive"
                                  />
                                )}
                                <Styled.SubCategoryName>
                                  {subCategory?.name}
                                </Styled.SubCategoryName>
                              </Styled.SubCategories>
                            );
                          }
                        )}
                      </StyledGridBox>

                      <Typography fontSize="fontSize14">
                        See more
                      </Typography>
                    </Styled.Category>
                  );
                } else if (category?.subCategories?.length === 1) {
                  return (
                    <Styled.Category key={category?.key}>
                      <Styled.CategoryName
                        fontSize="FontSize16"
                        fontWeight="bold"
                      >
                        {category?.name}
                      </Styled.CategoryName>

                      <StyledGridBox
                        gridTemplateColumns="repeat(1, 1fr)"
                        gridTemplateRows="repeat(1, 1fr)"
                        gridGap="1rem"
                      >
                        {category?.subCategories?.map(
                          (subCategory, index) => {
                            return (
                              <Styled.SubCategories
                                key={subCategory?.key}
                              >
                                {subCategory?.image?.asset?.url && (
                                  <Image
                                    src={
                                      subCategory?.image?.asset?.url
                                    }
                                    height={140}
                                    width={140}
                                    layout="responsive"
                                  />
                                )}
                                <Styled.SubCategoryName>
                                  {subCategory?.name}
                                </Styled.SubCategoryName>
                              </Styled.SubCategories>
                            );
                          }
                        )}
                      </StyledGridBox>

                      <Typography fontSize="fontSize14">
                        See more
                      </Typography>
                    </Styled.Category>
                  );
                }
              })
            : null}
        </StyledGridBox>
      </Inner>
    </Styled.Container>
  );
};

export default CategorySection;
