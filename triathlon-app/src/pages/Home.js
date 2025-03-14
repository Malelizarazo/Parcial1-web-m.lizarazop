import React, { useEffect, useState } from "react";
import "./Home.css";
import { getMockActivities } from "../mockService.js"; // Import mock service

const user = {
  name: "Camilo Escobar",
  profileImage: "https://img.freepik.com/foto-gratis/nadador-profesional_1268-24705.jpg",
  bestTimes: { running: "1:05", swimming: "1:05", cycling: "1:05" },
};

function Home() {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    setActivities(getMockActivities()); // Fetch activity data
  }, []);

  if (!activities) return <p>Loading...</p>; // Show loading until data is ready

  return (
    <div className="home-container">
      {/* User Info */}
      <div className="user-info">
        <img src={user.profileImage} alt="User" className="profile-image" />
        <h2>{user.name}</h2>
        <div className="user-times">
          <span>🏃 {user.bestTimes.running}</span>
          <span>🏊 {user.bestTimes.swimming}</span>
          <span>🚴 {user.bestTimes.cycling}</span>
        </div>
      </div>

      {/* Activity Grid */}
      <div className="sessions">
        {Object.keys(activities).map((category) => (
          <div className="session-category" key={category}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="session-grid">
              {activities[category].map((activity, index) => (
                <div key={index} className="session-card">
                  <img src={activity.image} alt={activity.type} />
                  <div className="session-details">
                    <p><strong>Length:</strong> {activity.length}</p>
                    <p><strong>Duration:</strong> {activity.duration}</p>
                    <p><strong>City:</strong> {activity.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
