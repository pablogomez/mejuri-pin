import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../../configuration";
import {
  FooterContainer,
  HeaderContainer,
  NavContainer,
  PageContainer,
} from "../../containers";
import { UserRoutes } from "../../routes";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: ${Breakpoints.PORTABLE}px) {
    display: grid;
    grid-template-columns: 200px 1fr 10px;
    grid-template-rows: auto 1fr auto;
  }
`;

const AppLayout = () => {
  return (
    <AppContainer>
      <HeaderContainer title="Mejuri" />
      <NavContainer></NavContainer>
      <PageContainer>
        <UserRoutes />
      </PageContainer>
      <FooterContainer />
    </AppContainer>
  );
};

export default AppLayout;
