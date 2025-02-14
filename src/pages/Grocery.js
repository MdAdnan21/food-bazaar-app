import React from "react";

const Grocery = () => {
  const blogs = [
    {
      title: "The Rise of Quick Commerce in Food Delivery",
      description:
        "Learn how food delivery services are redefining convenience for customers.",
      image:
        "https://www.shutterstock.com/shutterstock/photos/698318131/display_1500/stock-photo-wide-variety-of-vegetarian-food-presented-on-the-communal-table-698318131.jpg", // Pizza delivery
      link: "https://www.thekitchn.com",
    },
    {
      title: "Top 10 Must-Try Dishes in Your City",
      description:
        "Discover the best dishes to order today, handpicked by food lovers.",
      image:
        "https://www.shutterstock.com/shutterstock/photos/1697132758/display_1500/stock-photo-very-wide-panorama-banner-of-a-large-assortment-of-different-meat-and-fresh-vegetables-grilling-on-1697132758.jpg", // Popular dishes
      link: "https://www.thespruceeats.com",
    },
    {
      title: "How to Customize Your Meals Like a Pro",
      description:
        "Tips to make every order suit your taste preferences perfectly.",
      image:
        "https://www.shutterstock.com/shutterstock/photos/1660584622/display_1500/stock-photo-pizza-party-dinner-flat-lay-of-various-kinds-of-italian-pizza-salad-and-red-wine-in-glasses-over-1660584622.jpg", // Customizable food
      link: "https://www.eater.com",
    },
    {
      title: "Why Every Foodie Loves Late-Night Delivery",
      description:
        "We explore the joys of satisfying midnight cravings with quick delivery.",
      image:
        "https://www.shutterstock.com/image-photo/healthy-vegan-dishes-containers-flatlay-260nw-1348371596.jpg", // Nighttime meal
      link: "https://www.seriouseats.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#fe8b00] text-white py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Foodie Insights</h1>
        <p className="mt-4 text-lg md:text-xl">
          Explore stories, tips, and trends in the world of food and delivery.
        </p>
      </header>

      {/* Blog Cards */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-black">{blog.title}</h2>
                <p className="mt-2 text-gray-600">{blog.description}</p>
                <a
                  href={blog.link}
                  className="inline-block mt-4 text-[#fe8b00] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grocery;

// import { useEffect, useState } from "react";
// import RestaurantCard from "../components/RestaurantCard";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../hooks/useOnlineStatus";
// import Carousel from "../components/Carousel";
// import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
// import useResData from "../hooks/useResData";
// import Unserviceable from "../components/Unserviceable";
// // import comming_soon from "../images/comming-soon.png";

// import useInfiniteScroll from "../hooks/useInfiniteScroll";

// const Grocery = () => {
//   const [searchText, setsearchText] = useState("");

//   const {
//     restaurants,
//     filteredRestaurants,
//     isLoading,
//     error,
//     carouselDishData,
//     carouselResData,
//     updateRestaurants,
//   } = useResData();

//   // console.log("Restaurant: ", restaurants)
//   // console.log("FilteredRestaurants: ", filteredRestaurants);
//   // console.log("isLoading: ", isLoading);
//   // console.log("CarouselDishData", carouselDishData)
//   // console.log("CarouselResData", carouselResData)

//   const { loadingMore } = useInfiniteScroll(restaurants);

//   const onlineStatus = useOnlineStatus();

//   if (!onlineStatus)
//     return (
//       <h1>
//         Looks like you are offline!! Please check your internet connection...
//       </h1>
//     );

//   // const dispatch = useDispatch();
//   // const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData } = useResData();

//   // const {restaurant} = useCart()
//   // console.log('ResSlice: ',restaurant)

//   return (
//     <div className="body mt-[3%] mb-[5%] mx-[5%]">
//       <Carousel
//         isLoading={isLoading}
//         type={"Dish"}
//         carouselData={carouselDishData}
//       />

//       <Carousel
//         isLoading={isLoading}
//         type={"Restaurant"}
//         carouselData={carouselResData}
//       />

//       <h1 className="text-2xl font-extrabold mx-2  tablet:mx-5 my-2">
//         {filteredRestaurants?.heading}
//       </h1>

//       {isLoading ? (
//         <RestaurantCardSkeleton showHeading={loadingMore} />
//       ) : !filteredRestaurants?.data?.length ? (
//         <Unserviceable />
//       ) : (
//         <div className="flex flex-wrap my-13">
//           {filteredRestaurants?.data?.map((restaurant) => (
//             <Link
//               key={restaurant?.info?.id}
//               to={"/restaurant/" + restaurant?.info?.id}
//             >
//               <RestaurantCard resData={restaurant} />
//             </Link>
//           ))}
//           {loadingMore && <RestaurantCardSkeleton showHeading={false} />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Grocery;

// // import React from 'react'
// // import comming_soon from '../images/comming-soon.png'

// // const Grocery = () => {
// //     return (
// //       <div className='mt-[3%] mb-[5%] mx-[5%] flex flex-col justify-center items-center fade-in'>
// //         <img className='h-[30%] w-[30%]' src={comming_soon} alt="comming-soon" />
// //         <h1 className='text-default text-4xl font-semibold text-center'>This is basically added to test Lazy loading of a component!</h1>
// //       </div>
// //     )
// //   }

// //   export default Grocery;
