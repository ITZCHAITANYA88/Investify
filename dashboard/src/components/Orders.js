import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";
import { API_URL } from "./config"; // ✅ import local API URL

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/allOrders`) // ✅ local API call
      .then((res) => {
        setOrders(res.data); // assuming backend already sorts by createdAt
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const isBuy = order.mode === "BUY";
              const modeLabel = isBuy ? "Buy Order" : "Sell Order";
              const modeClass = isBuy ? "buy" : "sell";
              const orderTime = order.createdAt
                ? new Date(order.createdAt).toLocaleString()
                : "-";

              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{Number(order.price).toFixed(2)}</td>
                  <td className={modeClass}>{modeLabel}</td>
                  <td>{orderTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
