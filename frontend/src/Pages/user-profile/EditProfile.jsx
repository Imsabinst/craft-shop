import React, { useState } from "react";
import "./editProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Name and Email are required.");
      return;
    }

    // Simulate profile update
    setTimeout(() => {
      setSuccessMessage("Profile updated successfully!");
    }, 500);
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter a new password"
          />
        </div>

        <button type="submit" className="update-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
