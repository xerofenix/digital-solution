import React from "react";
import "./ErrorPage.css"; // Vanilla CSS import

const ErrorPage: React.FC = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="home-button">
          Go Back Home
        </a>
      </div>
      <div className="error-graphic">
        <div className="error-sphere"></div>
        <div className="error-shadow"></div>
      </div>
    </div>
  );
};

export default ErrorPage;