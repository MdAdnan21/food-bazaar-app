import React from "react";

export default function About() {
  return (
    <div className="flex lg:flex-row w-full items-center bg-gradient-to-r from-primary to-secondary  px-8">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4 flex flex-col items-center lg:items-start">
        <h1 className="text-6xl font-extrabold text-black mb-6 leading-snug drop-shadow-lg">
          Experience the Magic of <br />
          <span className="text-[#fe8b00]">Food Plaza</span>
        </h1>
        <p className="text-lg text-black font-medium mb-6 leading-relaxed">
          Craving something delicious? Food Plaza brings you a wide variety of
          cuisines from top restaurants near you, delivered straight to your
          doorstep. Freshness and flavor guaranteed!
        </p>
        <p className="text-base text-black mb-6">
          From spicy street food to gourmet dishes, we’ve got everything to
          satisfy your appetite. Order with ease and enjoy exceptional service
          every time.
        </p>
        <button className="mt-8 px-8 py-4 bg-[#fe8b00] text-white font-bold text-lg rounded-full shadow-lg hover:bg-black hover:text-[#fe8b00] transition-all duration-300">
          Explore Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 mt-8 lg:mt-0 border-none">
        <img
          src="https://food-plaza-project.vercel.app/Burger_Img.d05b1710.png"
          alt="Delicious Burger"
          className="w-full lg:w-4/5 h-auto rounded-3xl transform hover:scale-90 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

// src="https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY="
// src="https://static.punjabkesari.in/multimedia/2023_11image_14_45_024379910pizza.jpg"

// import React, { useState, useEffect } from 'react';
// import { GITHUB_USER_API } from '../utils/constants';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import AboutSkeleton from '../skeletons/AboutSkeleton';

// const REPOSITORIES = [
//   {
//     name: 'Food_App-FE',
//     url: 'https://github.com/dee077/Food_App-FE',
//     description: 'Frontend repository for the Food App. It includes the user interface and design elements for the application.',
//   },
//   {
//     name: 'Food_App-BE',
//     url: 'https://github.com/dee077/Food_App-BE',
//     description: 'Backend repository for the Food App. It handles the server-side logic, mocks the backend for Swiggy\'s public API to bypass CORS policy, and provides the necessary API endpoints.',
//   },
// ];

// const About = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: 'defaultName',
//     location: 'defaultLocation',
//     avatar_url: '',
//     html_url: '',
//   });
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(GITHUB_USER_API);
//         const data = await response.json();
//         setUserInfo(data);
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 3000);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <AboutSkeleton />;
//   }

//   const { name, location, avatar_url, html_url } = userInfo;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center flex-wrap">
//       <div className="max-w-6xl w-full flex my-10 flex-wrap gap-6 justify-center">
//         {/* User Info Card */}
//         <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
//           <div className="flex flex-col items-center">
//             <img
//               src={avatar_url}
//               alt="GitHub profile"
//               className="w-32 h-32 rounded-full border-4 border-blue-400 mb-4"
//             />
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
//             <h3 className="text-lg mb-4 text-blue-600 underline">deepanshu.sahu2811@gmail.com</h3>
//             <h4 className="text-md text-gray-600 mb-4">Contact: +91 9407494737</h4>
//             <p className="text-lg text-gray-600 mb-6">
//               Hi there! I'm a passionate software developer with a focus on creating innovative and efficient applications. Please check out my GitHub repositories to explore some of my recent projects. Your feedback and collaboration are always welcome!
//             </p>
//           </div>
//         </div>

//         {/* Repositories Card */}
//         <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
//           <div className="flex flex-col items-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">My Projects</h2>
//             <p className="text-gray-600 mb-6 text-center">
//               Please check out the following repositories to understand the frontend and backend of the Food App. Each repository contains detailed information about the features and implementation.
//             </p>
//             {REPOSITORIES.map((repo) => (
//               <div key={repo.name} className="mb-6 text-center flex flex-col items-center">
//                 <a
//                   href={repo.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-gray-800 hover:text-gray-600 mb-2"
//                 >
//                   <FontAwesomeIcon icon={faGithub} size="2x" />
//                   <span className="ml-2 text-xl font-semibold">{repo.name}</span>
//                 </a>
//                 <p className="text-gray-600 text-center">{repo.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;
