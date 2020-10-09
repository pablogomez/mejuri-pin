import React, { ReactNode } from "react";
import styled from "styled-components";

const Main = styled.main`
  flex: 1;
  margin-top: 10px;
`;

const PageContainer = ({ children }: { children?: ReactNode }) => (
  <Main>{children}</Main>
);

export default PageContainer;
