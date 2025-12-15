import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cart-items?expand=product")
      .then((response) => {
        setCart(response.data);
      });
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
