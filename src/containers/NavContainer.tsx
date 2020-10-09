import React, { ChangeEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { PinCounter } from "../components/shared/PinCounter";
import { Breakpoints } from "../configuration";
import { ProductList } from "../services";
import { useMediaQuery } from "react-responsive";

const NavContainerBase = styled.nav`
  padding: 5px;
  z-index: 100;
`;

const NavDesktop = styled.div`
  top: 100px;
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
  font-variant: small-caps;
  flex-direction: column;
`;

const NavLink = styled.div`
  font-size: 1.1rem;

  color: #eaeaea;
  padding: 10px;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #ccc;
    font-weight: bolder;
  }
`;
const NavSelect = styled.select`
  width: 100%;
  padding: 5px;
  font-variant: small-caps;
  font-size: 1rem;
  border: 1px solid #cecece;
  background-color: beige;
  z-index: 100;
  position: fixed;
  top: 86px;
  left: 0px;
`;

const NavMobile = () => {
  const history = useHistory();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    history.push(`/${e.target.value}`);
  };

  const options = ProductList.map((routeName: string, key: number) => {
    switch (routeName) {
      case "shop_all":
        return (
          <option key={key} value="">
            Shop All
          </option>
        );
      case "pinned":
        return (
          <option key={key} value="pinned">
            Pinned Items
          </option>
        );
      default:
        return (
          <option key={key} value={routeName}>
            {routeName}
          </option>
        );
    }
  });
  return <NavSelect onChange={onChange}>{options}</NavSelect>;
};

const NavContainer = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(min-device-width: ${Breakpoints.PORTABLE}px)`,
  });

  const links = ProductList.map((routeName: string, key: number) => {
    switch (routeName) {
      case "shop_all":
        return (
          <NavLink key={key}>
            <Link to={`/`}>Shop All</Link>
          </NavLink>
        );
      case "pinned":
        return (
          <NavLink key="pinned">
            <Link to={`/pinned`}>
              Pinned Items (<PinCounter />)
            </Link>
          </NavLink>
        );
      default:
        return (
          <NavLink key={key}>
            <Link to={`/${routeName}`}>{routeName}</Link>
          </NavLink>
        );
    }
  });

  return (
    <NavContainerBase>
      {isTabletOrMobileDevice ? (
        <NavDesktop>{links}</NavDesktop>
      ) : (
        <NavMobile />
      )}
    </NavContainerBase>
  );
};

export default NavContainer;
