import React from "react";
import "./Apps.css"; // optional, for styling

const Apps = () => {
  return (
    <div className="wip-container">
      <div className="wip-card">
        <h1 className="wip-title">🚧 Work in Progress</h1>
        <p className="wip-message">
          This section of the dashboard is still under development.
          Stay tuned for updates!
        </p>
        <div className="wip-illustration">
          {/* optional: add a placeholder illustration or icon */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFA500"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12h20M12 2v20" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Apps;
