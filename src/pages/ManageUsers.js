import React from "react";

const ManageUser = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Customer",
      status: "Active",
      lastLogin: "2024-11-22 12:00 PM",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "Admin",
      status: "Inactive",
      lastLogin: "2024-11-21 10:30 AM",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      role: "Customer",
      status: "Active",
      lastLogin: "2024-11-20 2:45 PM",
    },
  ];

  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-xl h-[70vh]">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Manage Users
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">User ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Last Login</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`${
                      user.status === "Active"
                        ? "bg-green-500 text-white"
                        : "bg-gray-500 text-white"
                    } px-3 py-1 rounded-full`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2">{user.lastLogin}</td>
                <td className="px-4 py-2 space-x-3">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button
                    className={`${
                      user.status === "Active"
                        ? "text-red-500 hover:underline"
                        : "text-green-500 hover:underline"
                    }`}
                  >
                    {user.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;

// import React from 'react'

// const ManageUser = () => {
//   return (
//     <div className="body mt-[3%] mb-[5%] mx-[15%] min-h-[40vh] flex items-center">
//         <h1 className='text-5xl text-default font-semibold'>Manage User Page comming Soon...!</h1>
//     </div>
//   )
// }

// export default ManageUser
