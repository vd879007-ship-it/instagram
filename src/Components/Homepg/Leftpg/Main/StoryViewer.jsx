import React, { useState, useEffect } from "react";
import { FaTimes, FaVolumeMute, FaVolumeUp, FaPause, FaPlay, FaEllipsisH, FaRegHeart, FaRegPaperPlane, FaChevronRight } from "react-icons/fa";
import "./StoryViewer.css";

const StoryViewer = ({ stories, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const currentStory = stories[currentIndex];

 useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        goNext(true);
        return 0;
      }
      return prev + 1;
    });
  }, 300);
  return () => clearInterval(interval);
}, [currentIndex, isPaused]);

  const goNext = () => {
  if (currentIndex < stories.length - 1) {
    setCurrentIndex((prev) => prev + 1);
  } else {
    onClose();
  }
};

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextStory = stories[currentIndex + 1];
  const nextNextStory = stories[currentIndex + 2];

  return (
    <div className="story-viewer-overlay">
      <div className="story-ig-logo">Instagram</div>
      <FaTimes className="story-close-btn" onClick={onClose} />

      <div className="story-viewer-row">
        <div className="story-viewer-container">
         <div className="story-progress-row">
  <div className="story-progress-bar">
    <div
      className="story-progress-fill"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
</div>

          <div className="story-header">
            <div className="story-user-info">
              <img src={currentStory.img} alt={currentStory.username} className="story-user-img" />
              <span className="story-username">{currentStory.username}</span>
              <span className="story-time">10h</span>
            </div>
            <div className="story-header-icons">
              {isMuted ? (
                <FaVolumeMute onClick={() => setIsMuted(false)} />
              ) : (
                <FaVolumeUp onClick={() => setIsMuted(true)} />
              )}
              {isPaused ? (
                <FaPlay onClick={() => setIsPaused(false)} />
              ) : (
                <FaPause onClick={() => setIsPaused(true)} />
              )}
              <FaEllipsisH />
            </div>
          </div>

          <img src={currentStory.img} alt="story" className="story-main-img" />

          <div className="story-nav-left" onClick={goPrev}></div>
          <div className="story-nav-right" onClick={goNext}></div>

          <div className="story-reply-row">
            <input
              type="text"
              className="story-reply-input"
              placeholder={`Reply to ${currentStory.username}...`}
            />
            <FaRegHeart className="story-reply-icon" />
            <FaRegPaperPlane className="story-reply-icon" />
          </div>
        </div>

        {/* Side previews */}
        {nextStory && (
          <div className="story-preview-card" onClick={goNext}>
            <img src={nextStory.img} alt={nextStory.username} className="story-preview-img" />
            <div className="story-preview-overlay">
              <span className="story-preview-name">{nextStory.username}</span>
            </div>
          </div>
        )}
        {nextNextStory && (
          <div className="story-preview-card small" onClick={goNext}>
            <img src={nextNextStory.img} alt={nextNextStory.username} className="story-preview-img" />
          </div>
        )}

        {currentIndex < stories.length - 1 && (
          <FaChevronRight className="story-next-arrow" onClick={goNext} />
        )}
      </div>
    </div>
  );
};

export default StoryViewer;