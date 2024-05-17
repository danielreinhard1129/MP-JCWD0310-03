// "use client";
// import { RootState } from "@/redux/store";
// import React from "react";
// import { useSelector } from "react-redux";

// const Profile = () => {
//   const { id, username, email, role, points } = useSelector(
//     (state: RootState) => state.user,
//   );

//   return (
//     <div>
//       <p>User ID: {id}</p>
//       <p>Username: {username}</p>
//       <p>Email: {email}</p>
//       <p>Role: {role}</p>
//       <p>
//         Points:{" "}
//         {points.map((point) => (
//           <div key={point.id}>Total: {point.total}</div>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default Profile;
