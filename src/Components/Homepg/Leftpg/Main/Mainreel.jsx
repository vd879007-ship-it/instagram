import React, { useState, useRef, useEffect } from "react";
import {
  FaRegHeart, FaHeart, FaRegComment, FaRegPaperPlane,
  FaRegBookmark, FaBookmark, FaEllipsisH,
} from "react-icons/fa";
import StoryViewer from "./StoryViewer";
import "./Mainreel.css";

const stories = [
  { username: "_pooranii_...", img: "/girl 1.jpg" },
  { username: "Dharun_...", img: "/boy 1 (2).jpg" },
  { username: "sheeladevi...", img: "/girl 2.jpg" },
  { username: "vaira_krish...", img: "/boy 2.jpg" },
  { username: "suriya_m_...", img: "/boy 3.jpg" },
  { username: "itz_vedha_7", img: "/boy 4.jpg" },
  { username: "subi_Shankar...", img: "/girl 3.jpg" },
  { username: "Vino...", img: "/girl 4.jpg" },
  { username: "Dharshini...", img: "/mess 6.jpg" },
  { username: "Ruby...", img: "/girl 4.jpg" },
];

const posts = [
   {
    id:1,
    username: "hari.prasath",
    time: "1d",
    avatar: "/hari.jpeg",
    image: "/v15.mp4",
    mediaType: "video",
    likes: "30.5k likes",
    caption: "Learning fro the masterclass by the man KAMAL HAASAN  🔥",
  },

{
    id: 2,
    username: "peepandpuffofficial",
    time: "5h",
    avatar: "/lord.jpg",
    image: "/v2.mp4",
    mediaType: "video",
    likes: "20.5k likes",
    caption: "Bridal collection now open for bookings 👰",
  },

  {
    id: 3,
    username: "hari.prasath",
    time: "Aug 12",
    avatar: "/hari.jpeg",
    image: "/v19.mp4",
    mediaType: "video",
    likes: "24.8K likes",
    caption: "Raanjhanaa❤️",
  },
  
 {
    id: 6,
    username: "Santhoshiplus",
    time: "6hours ago",
    avatar: "/santhoshi.jpeg",
    image: "/plush.jpg",
    mediaType: "image",
    likes: "1.5k likes",
    caption: "Santhoshiplush For Bridal Enquires Contact +91 9543676444 — Book Your Big Day With PLUSH and enjoy exclusive bridal benefits.",
  },
  {
    id: 5,
    username: "VijayTv_official",
    time: "1d",
    avatar: "/Vijay Television.jpg",
    image: "/v12.mp4",
    mediaType: "video",
    likes: "1k likes",
    caption: "Fun iruku 😍",
  },

   {
    id: 4,
    username: "hari.prasath",
    time: "8h",
    avatar: "/hari.jpeg",
    image: "/v17.mp4",
    mediaType: "video",
    likes: "40.5k likes",
    caption: "Na Pogata 🪽",
  },

];

// NEW: separate component for video posts — handles scroll-based play/pause
const VideoPost = ({ post, isMuted, onToggleMute }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={post.image}
        className="post-image"
        muted={isMuted}
        loop
        playsInline
        onClick={() => onToggleMute(post.id)}
      />
      <div className="video-mute-icon" onClick={() => onToggleMute(post.id)}>
        {isMuted ? "🔇" : "🔊"}
      </div>
    </>
  );
};

const MainReel = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [storyViewerOpen, setStoryViewerOpen] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [unmutedPostId, setUnmutedPostId] = useState(null); // NEW: only ONE video unmuted at a time

  const toggleMute = (id) => {
    setUnmutedPostId((prev) => (prev === id ? null : id));
  };

  const toggleLike = (id) =>
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleSave = (id) =>
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="main-feed">
      {/* Stories */}
      <div className="stories-bar">
        {stories.map((s, i) => (
          <div
            className="story"
            key={i}
            onClick={() => {
              setSelectedStoryIndex(i);
              setStoryViewerOpen(true);
            }}
          >
            <div className="story-ring">
              <img src={s.img} alt={s.username} />
            </div>
            <span>{s.username}</span>
          </div>
        ))}
      </div>

      {storyViewerOpen && (
        <StoryViewer
          stories={stories}
          startIndex={selectedStoryIndex}
          onClose={() => setStoryViewerOpen(false)}
        />
      )}

      {/* Posts - scrollable feed */}
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <div className="post-header">
            <img src={post.avatar} alt="user" className="post-avatar" />
            <div className="post-header-text">
              <span className="post-username">{post.username}</span>
              <span className="post-time">{post.time}</span>
            </div>
            <FaEllipsisH className="post-menu" />
          </div>

          <div className="post-image-wrap">
            {post.mediaType === "video" ? (
              <VideoPost
                post={post}
                isMuted={unmutedPostId !== post.id}
                onToggleMute={toggleMute}
              />
            ) : (
              <img src={post.image} alt="post" className="post-image" />
            )}
            <div className="carousel-arrow">›</div>
            <div className="carousel-dots">
              <span className="active"></span>
            </div>
          </div>

          <div className="post-actions">
            <div className="left-actions">
              <span onClick={() => toggleLike(post.id)} className="action-icon">
                {likedPosts[post.id] ? <FaHeart className="liked" /> : <FaRegHeart />}
              </span>
              <span className="action-icon"><FaRegComment /></span>
              <span className="action-icon"><FaRegPaperPlane /></span>
            </div>
            <span onClick={() => toggleSave(post.id)} className="action-icon">
              {savedPosts[post.id] ? <FaBookmark /> : <FaRegBookmark />}
            </span>
          </div>

          <div className="post-likes">{post.likes}</div>
          <div className="post-comments">View all 999 comments</div>
          <div className="post-caption">
            <span className="post-username">{post.username}</span> {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainReel;

