import React from "react";
import styled from "styled-components";

const CategoryHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 40px;

  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 15px;
    border-top: 1px solid #dedede;
    width: calc(100% - 30px);
    z-index: -1;
  }

  h2 {
    display: inline-block;
    padding: 0 30px 0 16px;
    background-color: #fff;
    font-size: 1rem;
  }
`;

const CategoryHeader = ({ title }: { title: string }) => (
  <CategoryHeaderContainer>
    <h2>{title}</h2>
  </CategoryHeaderContainer>
);

export default CategoryHeader;
