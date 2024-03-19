import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [userData, setUserData] = useState(null);
  const [searchname, setSearchname] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`https://backend-phase5-project.onrender.com/${searchname}`);
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

    if (searchname !== '') {
      fetchUserData();
    }
  }, [searchname]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger fetchUserData when the search button is clicked
    setUserData(null); // Clear previous user data
    setSearchname(e.target.elements.name);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="name" placeholder="Enter name" />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userData ? (
        <div>
          <p><strong>name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      ) : (
        <p>Enter a name to search</p>
      )}
    </div>
  );
};

export default UserTable;

