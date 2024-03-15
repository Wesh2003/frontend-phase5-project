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
        const response = await fetch(`https://backend-phase5-project-1sau.onrender.com/${searchUsername}`);
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
      <h2>User Profile</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="username" placeholder="Enter username" />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userData ? (
        <div>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      ) : (
        <p>Enter a username to search</p>
      )}
    </div>
  );
};

export default UserTable;
