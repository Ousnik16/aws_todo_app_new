import React, { useState, useEffect } from 'react';

function Profile({ userData }) {
  const [forgottenPercentage, setForgottenPercentage] = useState(0);
  const [forgottenTasks, setForgottenTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    let total = 0;
    let forgotten = 0;

    userData.tasks.forEach((task) => {
      total++;
      if (!task.completed) {
        forgotten++;
      }
    });

    const percentage = total > 0 ? (forgotten / total) * 100 : 0;

    setTotalTasks(total);
    setForgottenTasks(forgotten);
    setForgottenPercentage(percentage);
  }, [userData]);

  return (
    <div className="profile-container">
      <div className="user-info">
        <div className="profile-img">
          {/* Assuming the profile image URL is available in userData.profilePicture */}
          <img src={userData.profilePicture} alt="Profile" className="profile-image" />
        </div>
        <div className="info-text">
          <h3>User Information</h3>
          <p>Total Tasks: {totalTasks}</p>
          <p>Forgotten Tasks: {forgottenTasks}</p>
          <p>Frequency: {forgottenPercentage.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
