import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaHome,
  FaPlayCircle,
  FaTelegramPlane,
  FaSearch,
  FaRegHeart,
  FaPlus,
  FaBars,
  FaThLarge,
  FaImages,
  FaCog,
  FaRegCheckSquare,
  FaRegBookmark,
  FaMoon,
  FaExclamationCircle,
  FaCircle,
  FaWhatsapp,
  FaAtom,
} from "react-icons/fa";
import CreatePostModal from "./CreatePostModal";
import "./Leftsidebar.css";

const LeftSidebar = ({ onNotificationClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMetaMenu, setShowMetaMenu] = useState(false);

  const menuItems = [
    { icon: <FaHome />, path: "/home", label: "Home" },
    { icon: <FaPlayCircle />, path: "/reels", label: "Reels" },
    { icon: <FaTelegramPlane />, path: "/messages", label: "Messages" },
    { icon: <FaSearch />, path: "/search", label: "Search" },
    { icon: <FaRegHeart />, path: "/notifications", label: "Notifications", dot: true, isNotification: true },
    { icon: <FaPlus />, path: "/create", label: "Create", isCreate: true },
  ];

  const handleMenuClick = (item) => {
    if (item.isNotification) {
      onNotificationClick();
    } else if (item.isCreate) {
      setShowCreateDropdown((prev) => !prev);
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="left-sidebar">
      <div className="sidebar-top">
        <div className="sb-icon logo" onClick={() => navigate("/")}>
          <FaInstagram />
        </div>

        {menuItems.map((item) => (
          <div key={item.path} className="sb-icon-wrapper">
            <div
              className={`sb-icon ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => handleMenuClick(item)}
            >
              {item.icon}
              {item.dot && <span className="dot"></span>}
              <span className="sb-tooltip">{item.label}</span>
            </div>

            {item.isCreate && showCreateDropdown && (
              <div className="create-dropdown">
                <div
                  className="create-dropdown-item"
                  onClick={() => {
                    setShowCreateDropdown(false);
                    setShowCreateModal(true);
                  }}
                >
                  <span>Post</span>
                  <FaImages className="create-dropdown-icon" />
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="sb-icon profile-icon" onClick={() => navigate("/profile")}>
          <img src="/profile .jpg" alt="profile" />
          <span className="sb-tooltip">Profile</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        {/* More menu */}
        <div className="sb-icon-wrapper">
          <div className="sb-icon" onClick={() => setShowMoreMenu((prev) => !prev)}>
            <FaBars />
            <span className="sb-tooltip">More</span>
          </div>

          {showMoreMenu && (
            <div className="more-menu">
              <div className="more-menu-item">
                <FaCog className="more-menu-icon" />
                <span>Settings</span>
              </div>
              <div className="more-menu-item">
                <FaRegCheckSquare className="more-menu-icon" />
                <span>Your activity</span>
              </div>
              <div className="more-menu-item">
                <FaRegBookmark className="more-menu-icon" />
                <span>Saved</span>
              </div>
              <div className="more-menu-item">
                <FaMoon className="more-menu-icon" />
                <span>Switch appearance</span>
              </div>
              <div className="more-menu-item">
                <FaExclamationCircle className="more-menu-icon" />
                <span>Report a problem</span>
              </div>

              <div className="more-menu-divider"></div>

              <div className="more-menu-item">
                <span>Switch accounts</span>
              </div>
              <div className="more-menu-item">
                <span>Log out</span>
              </div>
            </div>
          )}
        </div>

        {/* Also from Meta menu */}
        <div className="sb-icon-wrapper">
          <div className="sb-icon" onClick={() => setShowMetaMenu((prev) => !prev)}>
            <FaThLarge />
            <span className="sb-tooltip">Also from Meta</span>
          </div>

          {showMetaMenu && (
            <div className="meta-menu">
              <div className="meta-menu-item">
                <FaCircle className="meta-menu-icon" />
                <span>Meta AI</span>
              </div>
              <div className="meta-menu-item">
                <FaAtom className="meta-menu-icon" />
                <span>AI Studio</span>
              </div>
              <div className="meta-menu-item">
                <FaWhatsapp className="meta-menu-icon" />
                <span>WhatsApp</span>
              </div>
              <div className="meta-menu-item">
                <FaAtom className="meta-menu-icon" />
                <span>Threads</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {showCreateModal && (
        <CreatePostModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default LeftSidebar;
