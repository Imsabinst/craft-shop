# Project Name

craftshop - eCraft
This is an eCommerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse products, add them to the cart.

## Introduction

Welcome to eCraft - eCommerce MERN application! Integrating MongoDB, Express.js, React.js and Node.js. The products shown here are tranditional handicraft items collected from different parts of the world. You can browse latest items, add to cart, delete from the cart.

## Features

NORMAL USER:

- User authentication (signup, login, logout)
- Browse products by category
- View product details
- Add products to the cart
- Update cart items (quantity, remove items)

ADMIN:

- Can add, delete product

## Future work

- Search products by name or category
- images
- Checkout process (shipping address, payment method)
- Order history for registered users

## Installation

1. Clone the repository:

git clone https://github.com/Imsabinst/craft-shop.git

2. Navigate to the project directory:

3. Install dependencies for both the frontend and backend:

- cd admin && npm install
- cd ../frontend && npm install
- cd ../backend && npm install

4. Set up environment variables:

- backend
  PORT=5001
  MONGODB_URI=<your_mongodb_uri>
  JWT_SECRET=<your_jwt_secret>

5. Run the development server:
   Start the backend server:
   cd backend && npm start or npm run dev

Start the frontend development server:
cd frontend && npm start

6. Open your web browser and navigate to http://localhost:3000 to view the application.

&copy;2024 Sabin. All rights reserved.
