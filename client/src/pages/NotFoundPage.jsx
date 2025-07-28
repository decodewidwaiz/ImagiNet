import React from 'react';
import { Link } from 'react-router-dom'; // Optional if using React Router

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </p>
      <p className="text-md text-gray-600 mt-2 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-md text-sm font-medium"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;