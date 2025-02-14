// import React from 'react'

// const Admin = () => {
//   return (
//     <div className="body mt-[3%] mb-[5%] mx-[15%] min-h-[40vh] flex items-center">
//         <h1 className='text-5xl text-default font-semibold'>Admin Page comming Soon...!</h1>
//     </div>
//   )
// }

// export default Admin

import React from "react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex h-full">
        <div className="w-64 bg-[#fe8b00] text-white p-6 space-y-8">
          <div className="text-2xl font-bold">Foodie Admin</div>

          {/* Sidebar Menu */}
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center text-white hover:bg-white hover:text-[#fe8b00] p-2 rounded-md transition-all"
            >
              <span className="material-icons mr-4">dashboard</span> Dashboard
            </a>
            <a
              href="#"
              className="flex items-center text-white hover:bg-white hover:text-[#fe8b00] p-2 rounded-md transition-all"
            >
              <span className="material-icons mr-4">group</span> Users
            </a>
            <a
              href="#"
              className="flex items-center text-white hover:bg-white hover:text-[#fe8b00] p-2 rounded-md transition-all"
            >
              <span className="material-icons mr-4">shopping_cart</span> Orders
            </a>
            <a
              href="#"
              className="flex items-center text-white hover:bg-white hover:text-[#fe8b00] p-2 rounded-md transition-all"
            >
              <span className="material-icons mr-4">local_dining</span> Food
              Items
            </a>
            <a
              href="#"
              className="flex items-center text-white hover:bg-white hover:text-[#fe8b00] p-2 rounded-md transition-all"
            >
              <span className="material-icons mr-4">settings</span> Settings
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button className="bg-[#fe8b00] text-white px-4 py-2 rounded-lg">
                Logout
              </button>
              <div className="relative">
                <button className="bg-[#fe8b00] text-white px-4 py-2 rounded-lg">
                  <span className="material-icons">notifications</span>
                </button>
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </header>

          {/* Main Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-700">
                Total Orders
              </h2>
              <p className="text-3xl text-[#fe8b00] font-bold">1245</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-700">
                Total Users
              </h2>
              <p className="text-3xl text-[#fe8b00] font-bold">542</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-700">
                Total Revenue
              </h2>
              <p className="text-3xl text-[#fe8b00] font-bold">$50,520</p>
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="bg-white p-6 mt-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Recent Orders
            </h2>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">#A1245</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">$35.00</td>
                  <td className="px-4 py-2 text-[#fe8b00]">Delivered</td>
                  <td className="px-4 py-2 text-blue-500 cursor-pointer">
                    View
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">#B8967</td>
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">$18.99</td>
                  <td className="px-4 py-2 text-[#fe8b00]">Pending</td>
                  <td className="px-4 py-2 text-blue-500 cursor-pointer">
                    View
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">#C6742</td>
                  <td className="px-4 py-2">Mike Johnson</td>
                  <td className="px-4 py-2">$42.75</td>
                  <td className="px-4 py-2 text-[#fe8b00]">Delivered</td>
                  <td className="px-4 py-2 text-blue-500 cursor-pointer">
                    View
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Food Item Management Section */}
          <div className="bg-white p-6 mt-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Food Items Management
            </h2>
            <button className="bg-[#fe8b00] text-white px-6 py-2 rounded-lg">
              Add New Food Item
            </button>
            <div className="mt-4">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Item Name</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">Pizza Margherita</td>
                    <td className="px-4 py-2">Pizza</td>
                    <td className="px-4 py-2">$15.99</td>
                    <td className="px-4 py-2 text-blue-500 cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">Cheese Burger</td>
                    <td className="px-4 py-2">Burgers</td>
                    <td className="px-4 py-2">$9.99</td>
                    <td className="px-4 py-2 text-blue-500 cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">Pasta Carbonara</td>
                    <td className="px-4 py-2">Pasta</td>
                    <td className="px-4 py-2">$13.50</td>
                    <td className="px-4 py-2 text-blue-500 cursor-pointer">
                      Edit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
