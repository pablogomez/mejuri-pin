import React from "react";
import styled from "styled-components";

const LoaderIcon = styled.img`
  display: block;
  border: 0;
  width: 40px;
  height: 40px;
  margin: 2% auto;
`;

const Loading = () => {
  return <LoaderIcon src="./loader.gif" />;
};

export default Loading;
