import React from "react";
import { FaCog, FaTh, FaBookmark, FaUserTag, FaCamera, FaPlus } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const user = {
    username: "sai_87746",
    name: "Saya 🌹",
    posts: 0,
    followers: 49,
    following: 89,
    bioTags: "# Travel 🛂 💕",
    profilePic: "/profile .jpg",
  };

  const highlights = [
    { img: "/hari.jpeg", label: "" },
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img src={user.profilePic} alt="profile" className="profile-pic" />
        </div>

        <div className="profile-info">
          <div className="profile-username-row">
            <h2>{user.username}</h2>
            <FaCog className="settings-icon" />
          </div>

          <p className="profile-name">{user.name}</p>

          <div className="profile-stats">
            <span><b>{user.posts}</b> posts</span>
            <span><b>{user.followers}</b> followers</span>
            <span><b>{user.following}</b> following</span>
          </div>

          <p className="profile-bio">{user.bioTags}</p>

          <div className="profile-actions">
            <button className="profile-btn">Edit profile</button>
            <button className="profile-btn">View archive</button>
          </div>
        </div>
      </div>

      <div className="highlights-row">
        {highlights.map((h, i) => (
          <div className="highlight-item" key={i}>
            <img src={h.img} alt="highlight" />
          </div>
        ))}
        <div className="highlight-item new-highlight">
          <div className="new-circle">
            <FaPlus />
          </div>
          <span>New</span>
        </div>
      </div>

      <div className="profile-tabs">
        <div className="tab active"><FaTh /></div>
        <div className="tab"><FaBookmark /></div>
        <div className="tab"><FaUserTag /></div>
      </div>

      <div className="empty-state">
        <div className="camera-circle">
          <FaCamera size={30} />
        </div>
        <h3>Share Photos</h3>
        <p>When you share photos, they will appear on your profile.</p>
      </div>

      <div className="post">
        <p>Share your first photo</p>
      </div>
      
         <div className="link">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Popular</span>
        <span>Instagram Lite</span>
        <span>Meta AI</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
      </div>

      <div className="bottom">
        <span>English ▾</span>
        <span>© 2026 Instagram from Meta</span>
      </div>

    </div>
  );
};

export default Profile;
