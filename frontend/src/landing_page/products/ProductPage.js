import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

// CRA uses process.env.REACT_APP_* for environment variables
const frontendUrl =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo={frontendUrl}
        learnMore={frontendUrl}
        googlePlay="https://play.google.com/store/search?q=kite&c=apps&hl=en"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore={frontendUrl}
      />

      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo={frontendUrl}
        learnMore={frontendUrl}
        googlePlay={frontendUrl}
        appStore={frontendUrl}
      />

      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore={frontendUrl}
      />

      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo={frontendUrl}
        learnMore={frontendUrl}
        googlePlay={frontendUrl}
        appStore={frontendUrl}
      />

      <Universe />
    </>
  );
}

export default ProductPage;
