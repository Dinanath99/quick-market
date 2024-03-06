import React from "react";
import Layout from "../../components/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Order = () => {
  return (
    <Layout title={"Your order"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
            <div className="col-md-9">
              <h1>All orders</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
