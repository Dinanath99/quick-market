import React from "react";
import Layout from "../components/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus p-5">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            We value our customers and aim to provide the best shopping
            experience possible. If you have any queries or require information
            about our products, please don't hesitate to get in touch. Our
            dedicated team is available to assist you 24/7.
          </p>
          <p className="mt-3">
            <BiMailSend /> support@quickmarket.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> +011-2354534
          </p>
          <p className="mt-3">
            <BiSupport /> 24/7 Support: 434234-4343-434 (toll-free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
