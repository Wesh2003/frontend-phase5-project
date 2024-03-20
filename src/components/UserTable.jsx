import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [userData, setUserData] = useState(null);
  const [searchUsername, setSearchUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`https://backend-phase5-project.onrender.com/${searchUsername}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    if (searchUsername.trim() !== '') {
      fetchUserData();
    }
  }, [searchUsername]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger fetchUserData when the search button is clicked
    setUserData(null); // Clear previous user data
    setSearchUsername(e.target.elements.username.value.trim());
  };

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