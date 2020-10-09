import { capitalize } from "lodash";
import React from "react";
import { Helmet } from "react-helmet";

const UpdateHead = ({ page }: { page: string }) => (
  <Helmet>
    <title>Mejuri | {capitalize(page)}</title>
    <meta name="description" content={`Mejuri ${page} page`} />
  </Helmet>
);

export default UpdateHead;
