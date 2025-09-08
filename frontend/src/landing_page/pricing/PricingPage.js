import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <Hero />

      {/* Call to Action (Open Account) */}
      <div className="my-5">
        <OpenAccount />
      </div>

      {/* Brokerage Details */}
      <div className="my-5">
        <Brokerage />
      </div>
    </div>
  );
}

export default PricingPage;
