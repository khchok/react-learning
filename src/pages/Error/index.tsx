import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const errors = useRouteError() as Error;
  console.log(errors);
  return (
    <MainLayout>
      <h1>{errors.message ? errors.message : "Error"}</h1>
    </MainLayout>
  );
};

export default Error;
