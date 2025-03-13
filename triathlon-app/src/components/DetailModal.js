import React from "react";

const DetailModal = ({ activity, onClose }) => {
  if (!activity) return null;

  return (
    <div>
      <div onClick={onClose}>Close</div>
      <h3>{activity.type}</h3>
      <p>Length: {activity.length}</p>
      <p>Duration: {activity.duration}</p>
      <p>City: {activity.city}</p>
    </div>
  );
};

export default DetailModal;
