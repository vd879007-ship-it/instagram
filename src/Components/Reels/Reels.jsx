import React, { useState, useRef } from "react";
import { FaHeart, FaRegComment, FaShare, FaBookmark, FaEllipsisH, FaVolumeMute, FaVolumeUp, FaChevronUp, FaChevronDown, FaPlay } from "react-icons/fa";
import "./Reels.css";

const reelsData = [
 
 {
    videoSrc: "/v1.mp4",
    username: "im_ck_02",
    peopleCount: "7 people",
    caption1: "NOT Suryavamsam😂 Watch Till end 😂..",
    caption2: "The Epic Payasam Scene is Coming on Part...",
    likes: "40.1K",
    comments: "271",
    shares: "415",
  },
  {
    videoSrc: "/v2.mp4",
    username: "ssnewsdigital",
    peopleCount: "3 people",
    caption1: "Lord Krishna fun",
    caption2: "Cutness Overload🫶...",
    likes: "262K",
    comments: "735",
    shares: "5,247",
  },
  {
    videoSrc: "/v3.mp4",
    username: "foodie_tam",
    peopleCount: "1 people",
    caption1: "Lets make OWL sweet🔥",
    caption2: "Save this for your next trip...",
    likes: "18.4K",
    comments: "142",
    shares: "980",
  },
  {
    videoSrc: "/v4.mp4",
    username: "",
    peopleCount: "5 people",
    caption1: "Yaru da nee 🔥",
    caption2: "Mudiyala da Sami 😂...",
    likes: "56.7K",
    comments: "890",
    shares: "2,310",
  },
  {
    videoSrc: "/v5.mp4",
    username: "comedyclub",
    peopleCount: "2 person",
    caption1: "Attu - Vetri 👀 ",
    caption2: "First Love always special🫶",
    likes: "102K",
    comments: "1.2K",
    shares: "8,900",
  },
];

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true); 
  const videoRef = useRef(null); 

  const reel = reelsData[currentIndex];

  const goUp = () => {
    setCurrentIndex((prev) => (prev === 0 ? reelsData.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const goDown = () => {
    setCurrentIndex((prev) => (prev === reelsData.length - 1 ? 0 : prev + 1));
    setIsPlaying(true); 
  };

  const toggleMute = (e) => {
    e.stopPropagation(); 
    setIsMuted((prev) => !prev);
  };

  // NEW: play/pause function
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="reels-page">
      <div className="reels-nav">
        <FaChevronUp className="nav-arrow" onClick={goUp} />
        <FaChevronDown className="nav-arrow" onClick={goDown} />
      </div>

      <div className="reel-main-row">
        {/* LEFT: caption info */}
        <div className="reel-info">
          <div className="reel-info-header">
            <img src="/boy 1 (2).jpg" className="reel-profile-pic" />
            <span className="reel-username">{reel.username}</span>
            <span className="dot">•</span>
            <button className="follow-btn">Follow</button>
          </div>
          <div className="reel-people">
            <span>👤 {reel.peopleCount}</span>
          </div>
          <p className="reel-caption">{reel.caption1}</p>
          <p className="reel-caption">{reel.caption2}</p>
        </div>

        {/* CENTER: video */}
        <div className="reel-container" onClick={togglePlayPause}>
          {/* NEW: onClick added above to toggle play/pause */}
          <video
            key={reel.videoSrc}
            ref={videoRef}
            src={reel.videoSrc}
            className="reel-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          {/* NEW: show play icon overlay when paused */}
          {!isPlaying && (
            <div className="play-overlay">
              <FaPlay className="play-icon" />
            </div>
          )}

          {isMuted ? (
            <FaVolumeMute className="mute-icon" onClick={toggleMute} />
          ) : (
            <FaVolumeUp className="mute-icon" onClick={toggleMute} />
          )}
        </div>

        {/* RIGHT: action icons */}
        <div className="reel-actions">
          <div className="action-item">
            <FaHeart className="action-icon like" />
            <span>{reel.likes}</span>
          </div>
          <div className="action-item">
            <FaRegComment className="action-icon" />
            <span>{reel.comments}</span>
          </div>
          <div className="action-item">
            <FaShare className="action-icon" />
            <span>{reel.shares}</span>
          </div>
          <div className="action-item">
            <FaBookmark className="action-icon" />
          </div>
          <div className="action-item">
            <FaEllipsisH className="action-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
