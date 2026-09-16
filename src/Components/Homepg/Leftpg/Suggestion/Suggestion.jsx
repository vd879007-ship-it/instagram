import React from "react";
import "./Suggestion.css";

const suggestions = [
  {
    username: "Kaviya",
    note: "Suggested for you",
    image: "/Sug 1.jpg",
  },
  {
    username: "hussain",
    note: "Suggested for you",
    image: "/Sug 4.jpg",
  },
  {
    username: "Vasunthara",
    note: "Followed by black._.queen.43",
    image: "/Sug 2.jpg",
  },
  {
    username: "Sivanya",
    note: "Followed by kavi._.psk + 4 more",
    image: "/Sug 3.jpg",
  },
  {
    username: "Karthi",
    note: "Suggested for you",
    image: "/Sug 5.jpg",
  },
];

const Suggestion = () => {
  return (
    <div className="suggestion-box">

      {/* Current User */}
      <div className="current-user">
        <img
          src="/profile .jpg"
          alt="user"
          className="sugg-avatar"
        />

        <div className="sugg-text">
          <p className="sugg-username">sai_87746</p>
          <p className="sugg-note">Saya 💗</p>
        </div>

        <span className="switch-link">Switch</span>
      </div>

      {/* Header */}
      <div className="sugg-header">
        <span>Suggested for you</span>
        <span className="see-all">See all</span>
      </div>

      {/* Suggestions */}
      <div className="suggestion-list">
        {suggestions.map((s, i) => (
          <div className="sugg-item" key={i}>

            <img
              src={s.image}
              alt={s.username}
              className="suggestion-avatar"
            />

            <div className="sugg-text">
              <p className="sugg-username">{s.username}</p>
              <p className="sugg-note">{s.note}</p>
            </div>

            <span className="follow-link">Follow</span>

          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="sugg-footer">
        <p className="footer-links">
          About · Help · Press · API · Jobs · Privacy · Terms ·
          Locations · Language · Meta Verified
        </p>

        <p className="footer-copy">
          © 2026 INSTAGRAM FROM META
        </p>
      </div>

    </div>
  );
};

export default Suggestion;
