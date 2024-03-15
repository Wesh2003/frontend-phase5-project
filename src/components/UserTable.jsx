import React from 'react';

function UserTable({ user }) {
  return (
    <div className="user-table">
      <h2>User Table</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Username:</strong></td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td><strong>Password:</strong></td>
            <td>{user.password}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>{user.phone}</td>
          </tr>

        
        </tbody>
      </table>
      
    </div>
  );
}

export default UserTable;
