import axios, { AxiosResponse } from "axios";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { CategoryType, ProductListDataSource } from "../../services";
import { getList } from "../../storage";
import AppLayout from "./AppLayout";
import GlobalStyles from "./GlobalStyles";

// Define a default query function that will receive the query key
const defaultQueryFn = async (category: CategoryType) => {
  if (category === CategoryType.PINNED) {
    return Promise.resolve(getList());
  }

  return axios
    .get(ProductListDataSource[category])
    .then((res: AxiosResponse) => res.data);
};

// provide the default query function to your app via the config provider
const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <GlobalStyles />
        <AppLayout />
        <ReactQueryDevtools />
      </ReactQueryCacheProvider>
    </BrowserRouter>
  );
};
export default App;
