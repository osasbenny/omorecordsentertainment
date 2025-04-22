import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Disc3 } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <Disc3 className="w-20 h-20 mx-auto text-primary-600 mb-6" />
        <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;