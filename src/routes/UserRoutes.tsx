import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PinnedPage, ProductPage } from "../pages";
import { CategoryType } from "../services";

const UserRoutes = () => {
  return (
    <Switch>
      <Route
        path={`/`}
        exact
        children={<ProductPage title="Shop All" category={CategoryType.ALL} />}
        key={CategoryType.ALL}
      />
      <Route
        path={`/${CategoryType.PINNED}`}
        children={<PinnedPage />}
        key={CategoryType.PINNED}
      />
      <Route
        path={`/${CategoryType.BRACELETS}`}
        children={
          <ProductPage
            title={CategoryType.BRACELETS}
            category={CategoryType.BRACELETS}
          />
        }
        key={CategoryType.BRACELETS}
      />
      <Route
        path={`/${CategoryType.EARRINGS}`}
        children={
          <ProductPage
            title={CategoryType.EARRINGS}
            category={CategoryType.EARRINGS}
          />
        }
        key={CategoryType.EARRINGS}
      />
      <Route
        path={`/${CategoryType.ENGAGEMENT}`}
        children={
          <ProductPage
            title={CategoryType.ENGAGEMENT}
            category={CategoryType.ENGAGEMENT}
          />
        }
        key={CategoryType.ENGAGEMENT}
      />
      <Route
        path={`/${CategoryType.ENGAGEMENT}`}
        children={
          <ProductPage
            title={CategoryType.ENGAGEMENT}
            category={CategoryType.ENGAGEMENT}
          />
        }
        key={CategoryType.ENGAGEMENT}
      />
      <Route
        path={`/${CategoryType.NECKLACES}`}
        children={
          <ProductPage
            title={CategoryType.NECKLACES}
            category={CategoryType.NECKLACES}
          />
        }
        key={CategoryType.NECKLACES}
      />
      <Route
        path={`/${CategoryType.PENDANTS}`}
        children={
          <ProductPage
            title={CategoryType.PENDANTS}
            category={CategoryType.PENDANTS}
          />
        }
        key={CategoryType.PENDANTS}
      />
      <Route
        path={`/${CategoryType.STAKINGSET}`}
        children={
          <ProductPage
            title={CategoryType.STAKINGSET}
            category={CategoryType.STAKINGSET}
          />
        }
        key={CategoryType.STAKINGSET}
      />
      <Route
        path={`/${CategoryType.RINGS}`}
        children={
          <ProductPage
            title={CategoryType.RINGS}
            category={CategoryType.RINGS}
          />
        }
        key={CategoryType.RINGS}
      />
      <Redirect to="/" />
    </Switch>
  );
};
export default UserRoutes;
