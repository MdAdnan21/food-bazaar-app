// import React, { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Logged In Successfully");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
//       <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
//         {/* Left Image Section */}
//         <div className="hidden lg:block w-full lg:w-1/2">
//           <img
//             // src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
//             src="https://media.istockphoto.com/id/1404858822/photo/home-food-delivery-in-recyclable-disposable-utensils.jpg?s=2048x2048&w=is&k=20&c=NoHCxMOc03VwwrqSWpjXgp43ksl4ZzeSQmA44WL-69I="
//             alt="Login Illustration"
//             className="w-full h-full"
//           />
//           dasf
//         </div>

//         {/* Right Form Section */}
//         <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
//           <h2 className="text-4xl font-extrabold text-center text-black mb-6">
//             Welcome Back!
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-6">
//               {/* Email Input */}
//               <div>
//                 <label
//                   className="text-lg font-medium text-gray-700"
//                   htmlFor="email"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-4 mt-2 text-black bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               {/* Password Input */}
//               <div>
//                 <label
//                   className="text-lg font-medium text-gray-700"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-4 mt-2 text-black bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>

//               {/* Forgot Password Link */}
//               <div className="text-right">
//                 <a
//                   href="/forgot-password"
//                   className="text-primary text-sm font-medium hover:underline"
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 mt-6 text-black bg-primary font-semibold text-lg rounded-lg shadow-md hover:bg-[#fe8b00] hover:scale-105 transition-all duration-300"
//               >
//                 Login
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="/signup"
//                 className="text-primary font-medium hover:underline"
//               >
//                 Sign Up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
