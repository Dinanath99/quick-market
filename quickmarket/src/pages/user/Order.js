import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // New state to track loading status
  const [error, setError] = useState(null); // New state to track errors
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/orders");
      setOrders(data);
    } catch (error) {
      setError(error.message); // Set error state with the error message
    } finally {
      setLoading(false); // Update loading status regardless of success or failure
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  return (
    <Layout title={"Your order"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All orders</h1>
            {orders?.map((o, i) => (
              <div className="border shadow">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.payment.success ? "success" : "failed"}</td>
                      <td>{o?.products?.length}</td>
                      {/* Add other columns accordingly based on your order object */}
                    </tr>
                  </tbody>
                </table>

                <div className="container">
                  {o?.products?.map((p, i) => (
                    <div className="row mb-2 p-3 card flex-row" key={p.id}>
                      <div className="col-md-4">
                        <img
                          src={`/api/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          width="300px"
                          height="300px"
                        />
                      </div>
                      <div className="col-md-8">
                        <h4>{p.name}</h4>
                        <p>{p.description.substring(0, 30)}</p>
                        <h4>Price :{p.price}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
