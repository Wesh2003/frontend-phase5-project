import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserProfile({ userId }) {
  const history = useHistory();
  const [user, setUser] = useState(null);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`https://backend-phase5-project-1sau.onrender.com/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    } else {
      // If userId is not provided, redirect to login page
      history.push('/login');
    }
  }, [userId, history]); // Include userId and history in the dependency array

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

export default UserProfile;
