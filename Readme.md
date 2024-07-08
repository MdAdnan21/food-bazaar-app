# Food App Frontend

![Food App](./src/images/ss.png)

## Description

The Food App is a web application that allows users to browse restaurants, view menus, and place orders. This repository contains the frontend code built with React and Tailwind CSS. **The application uses the Swiggy Live API to fetch real-time restaurant data.**

## Features

1. **Responsive Design**: 
    - The application is fully responsive and adapts to different screen sizes using Tailwind CSS.
2. **Restaurant Listing**: 
    - Browse a list of restaurants with images, names, cuisines, delivery time, and cost for two.
3. **Hover Animations**: 
    - Smooth hover animations and dynamic styles enhance the user experience.

## Upcoming Features

1. **Infinite Scroll**: 
    - Implement infinite scroll using the Swiggy update API to dynamically load more restaurants as users scroll down the page.

2. **User Authentication**: 
    - Enable user authentication to allow users to create accounts, log in, and manage their profiles. Features like saving favorite restaurants, viewing order history, and managing account settings.

3. **Location-Based Restaurant Listing**: 
    - Use the user's geographical coordinates (longitude and latitude) to provide a list of nearby restaurants. This feature will leverage location services to ensure users see the most relevant dining options based on their current location.

4. **Cart Functionality**: 
    - Enhance the cart functionality to allow users to add, remove, and modify items in their cart. This will include features like updating quantities, viewing total costs, and proceeding to checkout, providing a complete and convenient ordering process.

5. **Additional Filters**: 
    - Add advanced filtering options to help users narrow down restaurant choices based on criteria such as rating, cuisine type, delivery time, cost for two, etc.

## Technologies Used

- React
- Tailwind CSS
- FontAwesome for icons
- React Router for navigation
- **Swiggy Live API** for fetching restaurant data
- **Parcel Bundler**: For Efficient bundling of the project for development and production.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/food-app-frontend.git
   cd Food-App-FE
   ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run Application:**
    ```bash
    npm start
    ```

### Contributing

If you would like to contribute to this project, please feel free to fork the repository, create a new branch, and submit a pull request with your changes. Contributions are always welcome!
