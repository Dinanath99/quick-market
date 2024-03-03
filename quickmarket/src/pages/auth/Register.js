import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  // form sumit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong !");
    }
  };
  return (
    <Layout title={"Register - Quickmarket "}>
      <div className="register">
        <h1>Register page</h1>
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name :</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter Your name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email :</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password :</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone :</label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="addresss">Address :</label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Address"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
