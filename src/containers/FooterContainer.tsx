import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  grid-column: span 3;
  padding: 20px;
  text-align: center;
  font-size: 1rem;
  background-color: #c1c1c1;
  color: white;
  position: sticky;
  bottom: 0px;
  z-index: 100;
`;

const FooterContainer = () => <Footer>Code Challenge</Footer>;

export default FooterContainer;
