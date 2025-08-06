import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css"; // reusing styles

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow, placeOrder } = useContext(GeneralContext); // ✅ also pull placeOrder

  const handleSellClick = async () => {
    const order = {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
      time: new Date().toLocaleTimeString(), // optional: timestamp
    };

    try {
      await axios.post("http://localhost:5000/newOrder", order);
      placeOrder(order); // ✅ store in context
      closeSellWindow();
    } catch (err) {
      console.error("Failed to place sell order:", err);
      alert("Failed to place sell order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Estimated Credit ₹{(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
