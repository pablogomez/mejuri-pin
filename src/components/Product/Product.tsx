import { get } from "lodash";
import React, { useState } from "react";
import styled from "styled-components";
import { Breakpoints } from "../../configuration";
import { existInList, togglePin } from "../../storage";
import { ProductType } from "../../types";
import Box from "../Box";
import Heart from "../Heart";
import Image from "../Image";

const Article = styled.article`
  position: relative;
  width: 45%;
  margin: 2%;
  border-radius: 5px;
  box-shadow: 10px 9px 34px -5px rgba(158, 158, 158, 0.69);
  animation: zoomInEnter 0.3s;
  @keyframes zoomInEnter {
    0% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @media (min-width: ${Breakpoints.PORTABLE}px) {
    width: calc(80% / 3);
  }

  img {
    max-width: 100%;
    border-radius: 0;
  }

  &:hover {
    box-shadow: 10px 9px 5px -5px rgba(158, 158, 158, 1);
    border-radius: 0;
  }
`;

const AccurateName = styled.h3`
  flex: 1 135px;
  font-weight: bolder;
  font-size: 1rem;
`;

const Price = styled.p`
  flex: 1 0;
  text-align: right;
  font-size: 0.9rem;
`;
const ProductInfo = ({
  accurate_name,
  price,
}: Pick<ProductType, "accurate_name" | "price">) => (
  <Box>
    <AccurateName>{accurate_name}</AccurateName>
    <Price>
      {price.currency} {price.amount}
    </Price>
  </Box>
);

const Product = ({
  product,
  readOnly,
}: {
  product: ProductType;
  readOnly: boolean;
}) => {
  const [isPinned, setIsPinned] = useState(existInList(product));

  const sizesSrcSet: Array<Object> = [
    { large: "1500w" },
    { medium: "650w" },
    { small: "230w" },
  ];
  const srcSetFn = (index: number = 0) => {
    return sizesSrcSet
      .map(
        (size: Object) =>
          get(
            product.variant_images,
            `[${index}].attachment_url_${Object.keys(size)}`
          ) + ` ${Object.values(size)}`
      )
      .join(",");
  };

  return (
    <Article>
      <Image
        alt={product.accurate_name}
        visible={1}
        loading="lazy"
        srcSet={srcSetFn(0)}
        sizes="(min-width: 993px) 30vw, 50vw"
      />
      <Image
        alt={product.accurate_name}
        visible={0}
        loading="lazy"
        srcSet={srcSetFn(1)}
        secondary={true}
        sizes="(min-width: 993px) 30vw, 50vw"
      />
      <ProductInfo
        accurate_name={product.accurate_name}
        price={product.price}
      />
      {!readOnly ? (
        <Box>
          <Heart
            active={isPinned}
            onClick={() => {
              togglePin(product);
              setIsPinned(existInList(product));
            }}
          />
        </Box>
      ) : null}
    </Article>
  );
};

export default React.memo(Product);
