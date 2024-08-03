import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="grid justify-center text-3xl text-gray-700 text-center mt-2 mb-5">
      <img 
      className="max-h-44 bg-white"
      src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" 
      alt="profile-pic" />
      <p>User: {userId}</p>
    </div>
  );
}

export default User;
