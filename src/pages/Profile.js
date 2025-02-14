import React, { useState, useEffect } from "react";

export default function Profile() {
  // State for managing user data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Retrieve the user data (name, email, address) from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const storedAddress = localStorage.getItem("userAddress");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedAddress) setAddress(storedAddress);
  }, []);

  // Handle saving data to localStorage
  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userAddress", address);
    alert("Information saved successfully!");
  };

  return (
    <div className="w-full bg-gradient-to-r from-primary to-secondary py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-black">
              Welcome, <span className="text-[#fe8b00]">{name || "User"}</span>!
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your account information and explore your profile below.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            alt="User Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg mt-6 md:mt-0"
          />
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Details */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-black mb-4">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 font-medium">Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-black font-bold p-2 rounded-md w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black font-bold p-2 rounded-md w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Phone</p>
                <p className="text-black font-bold">+1-234-567-890</p>
              </div>
              <button
                onClick={handleSave}
                className="mt-4 px-6 py-2 bg-[#fe8b00] text-white font-bold rounded-lg shadow-md hover:bg-black hover:text-[#fe8b00] transition duration-300"
              >
                Save Info
              </button>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-black mb-4">
              Address Details
            </h2>
            <div>
              <p className="text-gray-600 font-medium">Home Address</p>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-black p-2 rounded-md w-full h-24"
                placeholder="Enter your address"
              />
            </div>
            <button
              onClick={handleSave}
              className="mt-4 px-6 py-2 bg-[#fe8b00] text-white font-bold rounded-lg shadow-md hover:bg-black hover:text-[#fe8b00] transition duration-300"
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// const Profile = () => {
//   return (
//     <div className="body mt-[3%] mb-[5%] mx-[15%] min-h-[40vh] flex items-center">
//       <h1 className="text-5xl text-default font-semibold">
//         Profile Page comming Soon...!
//       </h1>
//     </div>
//   );
// };

// export default Profile;
// import React from "react";

// const Profile = () => {
//   return (
//     <div className="body mt-[3%] mb-[5%] mx-[15%] min-h-[40vh] flex items-center">
//       <h1 className="text-5xl text-default font-semibold">
//         Profile Page comming Soon...!
//       </h1>
//     </div>
//   );
// };

// export default Profile;
