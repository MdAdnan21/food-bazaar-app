import React from "react";

export default function Contact() {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-secondary py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-black mb-6 leading-tight">
          <span className="text-[#fe8b00]">Contact</span> Us
        </h1>
        <p className="text-lg text-gray-700 font-medium mb-12">
          We’re here to help! Whether you have a question, feedback, or need
          assistance, reach out to us, and we’ll respond as soon as possible.
        </p>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left bg-white p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-black mb-4">Get In Touch</h2>
            <p className="text-gray-700 mb-6">
              Fill out the form below, and our team will get back to you
              shortly. We’re dedicated to providing you with the best
              experience!
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#fe8b00] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#fe8b00] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#fe8b00] focus:outline-none"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#fe8b00] text-white font-bold text-lg rounded-lg shadow-md hover:bg-black hover:text-[#fe8b00] transition-transform duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-black mb-4">Our Office</h2>
            <p className="text-gray-700 text-lg mb-6 text-center">
              Food Plaza HQ, <br />
              123 Delicious Lane, <br />
              Flavor Town, Yum State, 456789
            </p>
            <p className="text-gray-700 mb-4">
              📞 <span className="font-bold text-black">Phone:</span>{" "}
              +1-234-567-890
            </p>
            <p className="text-gray-700 mb-4">
              ✉️ <span className="font-bold text-black">Email:</span>{" "}
              support@foodplaza.com
            </p>
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
              alt="Contact Us Illustration"
              className="w-full lg:w-3/4 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import ContactSkeleton from '../skeletons/ContactSkeleton';

// const Contact = () => {
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//       setTimeout(()=>{setIsLoading(false)}, 2000);
//     }, []);

//     if (isLoading) {
//       return <ContactSkeleton />;
//     }

//     const html_url = 'https://github.com/dee077'
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center flex-wrap">
//       <div className="max-w-6xl w-full flex items-center my-20 flex-wrap gap-6 justify-center">

//         {/* Links Card */}
//         <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
//           <div className="flex flex-col items-center mb-6">
//             <a
//               href={html_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
//             >
//               <FontAwesomeIcon className='text-gray-800' icon={faGithub} size="2x" />
//               <span className="ml-2 text-gray-800 text-xl font-semibold">GitHub Profile</span>
//             </a>
//             <p className="text-gray-600 mb-6 text-center">
//               Explore my GitHub profile to see all of my repositories and contributions. This is where I showcase my coding projects, including open-source contributions and personal projects.
//             </p>
//             <a
//               href="https://www.linkedin.com/in/deepanshu-sahu-1a14151a8/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
//             >
//               <FontAwesomeIcon icon={faLinkedin} size="2x" />
//               <span className="ml-2 text-xl font-semibold">LinkedIn Profile</span>
//             </a>
//             <p className="text-gray-600 mb-6 text-center">
//               Connect with me on LinkedIn to view my professional background, endorsements, and network with other professionals. I share updates about my career, achievements, and industry insights.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//     )
//   }

// export default Contact;
