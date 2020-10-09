import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Box from "../components/Box";
import Loading from "../components/Loading";
import Product from "../components/Product";
import UpdateHead from "../components/shared/UpdateHead";
import { CategoryType } from "../services";
import { clearList, getTotal } from "../storage";
import { ProductType } from "../types";

const PinnedList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonClear = styled.button`
  background: #8f8f8f;
  border-radius: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  padding: 5px;
  text-shadow: 1px 1px 20px #000000;
  border: solid #858585 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  &:hover {
    border: solid #898989 1px;
    background: #f1f1f1;
    border-radius: 10px;
    text-decoration: none;
  }
`;

const PinnedPage = () => {
  const { data: products, isLoading, refetch } = useQuery<Array<ProductType>>(
    CategoryType.PINNED
  );

  const [total, setTotal] = useState(getTotal());
  const clearLikes = () => {
    clearList();
    refetch();
    setTotal(getTotal());
  };

  return (
    <section>
      <UpdateHead page="Pinned Items" />
      <div>
        <Box>
          {total ? (
            <ButtonClear onClick={clearLikes}>Clear Likes {total}</ButtonClear>
          ) : (
            <p>Empty list</p>
          )}
        </Box>

        <PinnedList>
          {isLoading ? (
            <Loading></Loading>
          ) : total ? (
            products!.map((product: ProductType) => (
              <Product product={product} key={product.id} readOnly={true} />
            ))
          ) : null}
        </PinnedList>
      </div>
    </section>
  );
};

export default PinnedPage;
