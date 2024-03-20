import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  const fetchUserData = async (userId) => {
    try {
      const userId = 1 ;
      const response = await fetch(`https://backend-phase5-project-1sau.onrender.com/users/${userId}`);
      console.log(response)
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile