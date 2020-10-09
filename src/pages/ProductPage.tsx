import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import CategoryHeader from "../components/CategoryHeader";
import Loading from "../components/Loading";
import Product from "../components/Product";
import UpdateHead from "../components/shared/UpdateHead";
import { CategoryType } from "../services";
import { Category, ProductType } from "../types";

const ProductsGrid = styled.div``;

const ProductsPerCategory = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ProductsPage = ({
  title,
  category,
}: {
  title: string;
  category: CategoryType;
}) => {
  const { data: products, isLoading } = useQuery<Array<Category>>(category);

  return (
    <section>
      <UpdateHead page={title} />

      {isLoading ? (
        <Loading></Loading>
      ) : (
        products!.map((category: Category, key: number) => {
          return (
            <ProductsGrid key={key}>
              <div>
                <CategoryHeader title={category.name} />
                <ProductsPerCategory key={key}>
                  {category.products.map((product: ProductType) => (
                    <Product
                      product={product}
                      key={product.id}
                      readOnly={false}
                    />
                  ))}
                </ProductsPerCategory>
              </div>
            </ProductsGrid>
          );
        })
      )}
    </section>
  );
};

export default ProductsPage;
