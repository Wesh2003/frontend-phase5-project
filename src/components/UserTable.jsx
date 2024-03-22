import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  const fetchUserData = async (userId) => {
    const token = localStorage.getItem(" access_token");
    console.log(token)
    try {
      const response = await fetch(` https://backend-phase5-project.onrender.com/users/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      setUser(data);
      
    } catch (error) {
      console.log('Error in fetching User', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  },);

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



// import React, { useState, useEffect } from "react";
// import profileIcon from '../../../assets/profile icon.png';

// function Profile() {
//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const handleFetch = async () => {
//       try {
//         const response = await fetch(https://intasend-backend.onrender.com/users-by-id, {
//           method: 'GET',
//           headers: {
//             'Authorization': Bearer ${token},
//             "Content-Type": "application/json"
//           },
//         });
//         const data = await response.json();
//         setUser(data);
//         console.log(data);
//       } catch (error) {
//         console.log('Error in fetching User', error);
//       }
//     };
//     handleFetch();
//   }, [token]);


//   const hideID = (id) => {
//     if (id) {
//       return id.slice(0, 1) + "xxxxxxx" + id.slice(-2);
//     }
//     return id;
//   };

//   return (
//     <div className="container">
//           <h2 className="font-sans font-semibold mb-2 text-center">Profile</h2>
//       <div className="card">
//         <div className="card-body">
//           <div className="row">
//             <div className="col-md-6 offset-md-3 col-sm-12 mb-4">
//               <img src={profileIcon} alt='profile icon' style={{ height: "130px", width: "130px" }} />
//               <h5 className="card-title">{user.name}</h5>
//               <p>Joined in {user.created_at}</p>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-6 offset-md-3 col-sm-12 mb-4">
//               <h2 className="card-subtitle mb-2 text-muted">Email</h2>
//               <div className="card">
//                 <div className="card-body">
//                   <p className="card-text">{user.email}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 offset-md-3 col-sm-12 mb-4">
//               <h2 className="card-subtitle mb-2 text-muted">Account Options</h2>
//               <div className="card">
//                 <div className="card-body">
//                   <h4 className="card-subtitle mb-2 text-muted">National ID</h4>
//                   <p>{hideID(user.national_id)}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;