QuickMarket E-commerce App

Welcome to QuickMarket, an e-commerce website developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to browse through a variety of products, add them to their cart, and proceed to checkout securely.
Features

    User authentication and authorization for secure access.
    Seamless browsing experience with dynamic product listings.
    Cart management functionalities, including adding, removing, and updating items.
    Secure payment processing using Braintree.
    Responsive design for optimal viewing on various devices.

Installation

To run this application locally, follow these steps:

 1. Clone the repository:
      git clone https://github.com/your-username/quickmarket.git

2. Navigate to the project directory:
      cd quickmarket

3. Install dependencies:
     npm install
4. Set up environment variables:

  Create a .env file in the root directory and provide the following variables:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
BRAINTREE_MERCHANT_ID=your_braintree_merchant_id
BRAINTREE_PUBLIC_KEY=your_braintree_public_key
BRAINTREE_PRIVATE_KEY=your_braintree_private_key

5. Start the server:
 npm run dev
6. Navigate to http://localhost:3000 in your web browser to access the application.
Technologies Used

    Frontend:
        React.js
        React Router
        React Icons
        React Helmet

    Backend:
        Node.js
        Express.js
        MongoDB
        Mongoose

    Other Tools:
        bcryptjs: Password hashing
        Braintree: Payment processing
        cors: Cross-origin resource sharing
        dotenv: Environment variable management
        express-formidable: Middleware for form data parsing
        jsonwebtoken: User authentication
        morgan: HTTP request logging
        slugify: URL-friendly string conversion

Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.
License

This project is licensed under the ISC License. See the LICENSE file for details.

Author
 Dinanath Mukhiya

Thank you for using QuickMarket! If you have any questions or feedback, please don't hesitate to contact us. Happy shopping! 🛒🚀
