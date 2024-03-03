import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not found</h2>

        <Link to="/" className="png-btn">
          Go back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
