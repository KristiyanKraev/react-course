import { Header } from "../components/Header.jsx";
import { useParams } from "react-router";
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderProductData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchOrderProductData();
  }, [orderId]);
  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });
  const totalDeliveryTimeMs =
    orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let progressBarPercentage = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (progressBarPercentage > 100) {
    progressBarPercentage = 100;
  }
  const isPreparing = progressBarPercentage < 33;
  const isShipped = progressBarPercentage >= 33 && progressBarPercentage < 100;
  const isDelivered = progressBarPercentage === 100;
  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />

      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {progressBarPercentage === 100 ? "Delivered on " : "Arriving on "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />
          <div className="progress-labels-container">
            <div
              className={`progress-label${isPreparing && " current-status"} `}
            >
              Preparing
            </div>
            <div
              className={`progress-label ${isShipped && " current-status "}`}
            >
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered && " current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressBarPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
