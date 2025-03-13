import React from "react";
import "./Home.css";

const user = {
  name: "Camilo Escobar",
  profileImage: "https://img.freepik.com/foto-gratis/nadador-profesional_1268-24705.jpg", // Update with real image if needed
  bestTimes: { running: "1:05", swimming: "1:05", cycling: "1:05" },
};

const activities = {
  cycling: Array(10).fill({
    type: "Cycling",
    image: "https://th.bing.com/th/id/OIP.RaoE0SfVe2sIhl_1bnSyFQHaFj?rs=1&pid=ImgDetMain", // Random cycling images
    description: "Cycling Session",
  }),
  running: Array(10).fill({
    type: "Running",
    image: "https://th.bing.com/th/id/OIP.NnA6jIvlTZrMZedkm2JMngHaD4?rs=1&pid=ImgDetMain", // Random running images
    description: "Running Session",
  }),
  swimming: Array(10).fill({
    type: "Swimming",
    image: "https://th.bing.com/th/id/R.2564f65eb340a9f7801b455d2c8ebf99?rik=t9Ml2tuuHz8cNA&pid=ImgRaw&r=0", // Random swimming images
    description: "Swimming Session",
  }),
};

function Home() {
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
                  <p>{activity.description}</p>
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
