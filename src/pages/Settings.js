// import React from 'react'

// const Settings = () => {
//   return (
//     <div className="body mt-[3%] mb-[5%] mx-[15%] min-h-[40vh] flex items-center">
//         <h1 className='text-5xl text-default font-semibold'>Settings Page comming Soon...!</h1>
//     </div>
//   )
// }

// export default Settings

import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-[#fe8b00] text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Manage Your Foodie Experience</h1>
        <p className="mt-2 text-lg">
          Customize your preferences for a better food delivery experience!
        </p>
      </header>

      {/*  Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Account Settings Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Account Settings
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Manage your account information, security settings, and more.
          </p>

          <div className="space-y-4">
            {/* Email & Phone */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Email Address</span>
              <span className="text-gray-700">johndoe@example.com</span>
              <button className="text-[#fe8b00] hover:underline">Change</button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Phone Number</span>
              <span className="text-gray-700">+1 234 567 890</span>
              <button className="text-[#fe8b00] hover:underline">Change</button>
            </div>
          </div>
        </div>

        {/* Delivery Preferences Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Delivery Preferences
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Customize your delivery options and address details for quick
            access!
          </p>

          <div className="space-y-4">
            {/* Default Delivery Address */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Default Address</span>
              <span className="text-gray-700">123 Food St., New York</span>
              <button className="text-[#fe8b00] hover:underline">Change</button>
            </div>

            {/* Delivery Time Preferences */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">
                Preferred Delivery Time
              </span>
              <span className="text-gray-700">12:00 PM - 1:00 PM</span>
              <button className="text-[#fe8b00] hover:underline">
                Set Time
              </button>
            </div>

            {/* Special Instructions */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Special Instructions</span>
              <span className="text-gray-700">Leave food at the doorstep</span>
              <button className="text-[#fe8b00] hover:underline">Edit</button>
            </div>
          </div>
        </div>

        {/* Payment Settings Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Payment Methods
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Manage your payment methods and billing details for seamless
            checkout.
          </p>

          <div className="space-y-4">
            {/* Credit Card */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Credit/Debit Card</span>
              <span className="text-gray-700">Visa ending in 1234</span>
              <button className="text-[#fe8b00] hover:underline">Edit</button>
            </div>

            {/* PayPal */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">PayPal Account</span>
              <span className="text-gray-700">johndoe@paypal.com</span>
              <button className="text-[#fe8b00] hover:underline">Change</button>
            </div>
          </div>
        </div>

        {/* Food Preferences Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Food Preferences
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Tell us your preferences for personalized meal suggestions!
          </p>

          <div className="space-y-4">
            {/* Dietary Restrictions */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Dietary Preferences</span>
              <span className="text-gray-700">Vegetarian</span>
              <button className="text-[#fe8b00] hover:underline">Edit</button>
            </div>

            {/* Favorite Cuisines */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Favorite Cuisines</span>
              <span className="text-gray-700">Italian, Chinese</span>
              <button className="text-[#fe8b00] hover:underline">Edit</button>
            </div>

            {/* Spiciness Level */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Preferred Spiciness</span>
              <span className="text-gray-700">Medium</span>
              <button className="text-[#fe8b00] hover:underline">Change</button>
            </div>
          </div>
        </div>

        {/* Notification Settings Section */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Notifications
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Stay updated with the latest offers, promotions, and delivery
            updates.
          </p>

          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Email Notifications</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">Push Notifications</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-black">SMS Notifications</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
