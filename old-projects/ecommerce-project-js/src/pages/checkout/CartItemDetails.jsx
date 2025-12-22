import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";

export function CartItemDetails({ cartItem, loadCart }) {
  const [updatedQuantity, setUpdatedQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateCartItem = async () => {
    setUpdatedQuantity(true);
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity),
    });
    await loadCart();
    setUpdatedQuantity(false);
  };
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {updatedQuantity ? (
              <span className="quantity-label">{cartItem.quantity}</span>
            ) : (
              <input
                type="text"
                style={{ width: "50px" }}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateCartItem();
                  }
                  if (e.key === "Escape") {
                    setQuantity(cartItem.quantity);
                    setUpdatedQuantity(false);
                  }
                }}
              ></input>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateCartItem}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
