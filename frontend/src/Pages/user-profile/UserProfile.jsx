import React from "react";
import "./userProfile.css";
import { useAuth } from "../../Context/auth";

const UserProfile = () => {
  const [auth, setAuth] = useAuth();

  const user = auth || {};

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* <img
          src={}
          alt="Profile"
          className="profile-picture"
        /> */}
        <h1 className="profile-name">{auth?.user.name || "John Doe"}</h1>
        <p className="profile-email">
          {auth.user.email || "johndoe@example.com"}
        </p>
      </div>

      <div className="profile-details">
        <h2>Profile Details</h2>
        <p>
          <strong>Username:</strong> {auth?.user.name || "john_doe"}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone || "Not provided"}
        </p>
        <p>
          <strong>Address:</strong> {user.address || "No address available"}
        </p>
      </div>

      <button className="logout-button" onClick={() => alert("Logged Out!")}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
