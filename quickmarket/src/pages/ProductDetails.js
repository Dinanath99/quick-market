import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

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
      // getSimiliarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  // get similar product
  const getSimiliarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.product);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Price: {product.price}</h6>
          {product.category && <h6>Category: {product.category.name}</h6>}
          <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <div className="row">
        <h1>similar Product</h1>
      </div>
    </Layout>
  );
};
export default ProductDetails;
