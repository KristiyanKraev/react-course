import dayjs from "dayjs";

export function DeliveryDate({ deliveryOptions, cartItem }) {
  const selectedDeliveryOption = deliveryOptions.find((option) => {
    return option.id === cartItem.deliveryOptionId;
  });
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
