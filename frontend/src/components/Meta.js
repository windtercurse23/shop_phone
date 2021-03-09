import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell electronic product",
  keyword: "electronic  , buy electronic, cheap electronic",
};
export default Meta;
