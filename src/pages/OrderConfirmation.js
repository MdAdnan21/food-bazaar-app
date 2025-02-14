import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderConfirmation = () => {
  const { items, restaurant, totalPrice, totalItems, billingDetails } =
    useSelector((state) => state.cart);

  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    // Toggle blinking effect
    const interval = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 600); // Blinks every 600ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg max-w-3xl w-full p-8 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          🎉 Order Confirmed!
        </h1>
        <p className="text-center text-gray-600">
          Thank you for ordering! Your food is being prepared and will reach you
          soon.
        </p>

        {/* Blinking Delivery Time */}
        <div className="text-center mt-4">
          <p
            className={`text-lg font-semibold ${
              blinking ? "text-[#fe8b00]" : "text-gray-800"
            } transition-colors`}
          >
            <span className="font-bold text-2xl">
              {" "}
              Your food will arrive in{" "}
            </span>
            <span className="font-bold text-2xl">30 minutes</span>.
          </p>
        </div>

        {/* Restaurant Information */}
        {restaurant.name && (
          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-600">
              Ordered From:{" "}
              <span className="text-gray-800">{restaurant.name}</span>
            </h2>
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            Order Summary
          </h2>
          <ul className="space-y-3">
            {billingDetails.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2 last:border-none"
              >
                <span className="text-gray-600">
                  {item.dishName} (x{item.times})
                </span>
                <span className="font-semibold text-gray-800">
                  ${item.totalPrice.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-700 mt-2">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-[#fe8b00] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e57a00]">
            Track Order
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400"
            onclic
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
