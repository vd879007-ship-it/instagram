import React, { useState } from "react";
import { FaSearch, FaPlay } from "react-icons/fa";
import "./Search.css";

const searchGridData = [
  { id: 1, video: "/public/v15.mp4", isVideo: true },
  { id: 2, video: "/public/v2.mp4", isVideo: true },
  { id: 3, video: "/public/v3.mp4", isVideo: true,},
  { id: 4, video: "/public/v19.mp4", isVideo: true,},
  { id: 5, video: "/public/v7.mp4", isVideo: true },
  { id: 6, video: "/public/v8.mp4", isVideo: true },
  { id: 7, video: "/public/v16.mp4", isVideo: true },
  { id: 8, video: "/public/v10.mp4", isVideo: true },
  { id: 9, video: "/public/v20.mp4", isVideo: true },
  { id: 10, video: "/public/v11.mp4", isVideo: true },
  { id: 11, video: "/public/v17.mp4", isVideo: true },
  { id: 12, video: "/public/v4.mp4", isVideo: true },
  { id: 13, video: "/public/v12.mp4", isVideo: true },
  { id: 14, video: "/public/v13.mp4", isVideo: true },
  { id: 15, video: "/public/v1.mp4 ", isVideo: true },
  { id: 16, video: "/public/v5.mp4", isVideo: true },
  { id: 17, video: "/public/v18.mp4", isVideo: true },
  { id: 18, video: "/public/v9.mp4 ", isVideo: true },
  { id: 19, video: "/public/v6.mp4 ", isVideo: true },
  { id: 20, video: "/public/v14.mp4", isVideo: true },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search-page">
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <FaSearch className="search-bar-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="search-grid-wrapper">
        <div className="search-grid">
          {searchGridData.map((item) => (
            <div className="search-grid-item" key={item.id}>
              <video
                src={item.video}
                className="search-grid-video"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
              {item.isVideo && <FaPlay className="grid-play-icon" />}
              {item.label && <span className="grid-label">{item.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;