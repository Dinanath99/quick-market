import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrder = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processsing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const [changeStatus, setChangeStatus] = useState("");

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  return (
    <Layout title={"All Orders Data"}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
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
    </Layout>
  );
};

export default AdminOrder;
