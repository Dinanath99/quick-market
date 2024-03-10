import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProducts] = useState([]);

  //initial details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/product/get-product/${params.slug}`
      );
      setProducts(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Product details</h1>
      {JSON.stringify(product, null, 4)}
    </Layout>
  );
};
export default ProductDetails;
