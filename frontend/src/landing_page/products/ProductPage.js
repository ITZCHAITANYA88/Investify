import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
            <Hero />
             <LeftSection
                imageURL="media/images/kite.png"
                productName="Kite"
                productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an  elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="https://kite-demo.zerodha.com/dashboard"
                learnMore="https://zerodha.com/products/kite"
                googlePlay="https://play.google.com/store/search?q=kite&c=apps&hl=en"
                appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
            />
            <RightSection
                imageURL="media/images/console.png"
                productName="Console"
                productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="https://zerodha.com/products/console"
            />
             <LeftSection
                imageURL="/media/images/coin.png"
                productName="Coin"
                productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="https://coin.zerodha.com/"
                learnMore="https://coin.zerodha.com/"
                googlePlay="https://play.google.com/store/search?q=kite&c=apps&hl=en"
                appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
            />
            <RightSection
                imageURL="/media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="https://zerodha.com/products/api/"
            />
            <LeftSection
                imageURL="/media/images/varsity.png"
                productName="Varsity mobile"
                productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
                learnMore="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
                googlePlay="https://play.google.com/store/search?q=kite&c=apps&hl=en"
                appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
            />
            <Universe />
        </>
     );
}

export default ProductPage;