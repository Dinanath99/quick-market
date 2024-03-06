import { useState, useEffect, createContext } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
const AuthContext = createContext();

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  //default axios

  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/admin-auth");

      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner path="" />;
}