import React from "react";
import ReactDOM from "react-dom";
import { FaTimes, FaImage } from "react-icons/fa";
import "./CreatePostModal.css";

const CreatePostModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="create-post-overlay">
      <div className="create-post-box">
        <div className="create-post-header">
          <h3>Create new post</h3>
          <FaTimes className="create-post-close" onClick={onClose} />
        </div>

        <div className="create-post-body">
          <FaImage className="create-post-icon" />
          <p>Drag photos and videos here</p>
          <button className="create-post-select-btn">Select from computer</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CreatePostModal;