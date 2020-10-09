import React from "react";
import styled from "styled-components";

const HeaderBase = styled.header`
  grid-column: span 3;
  padding: 20px;
  text-align: center;
  font-size: 1.4em;
  background-color: #f5f5f5;
  color: black;
  border-bottom: 1px solid #f1f0f0;
  position: sticky;
  top: 0px;
  z-index: 100;
`;
const LogoMejuri = styled.img`
  height: 3rem;
`;
const HeaderContainer = ({ title }: { title: string }) => {
  return (
    <HeaderBase>
      <LogoMejuri src="./logo_mejuri.svg" />
    </HeaderBase>
  );
};

export default HeaderContainer;
