import React, { useState } from "react";
import { FiSend, FiX, FiMaximize2, FiEdit3 } from "react-icons/fi";
import "./Message.css";

const Messages = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SMALL MESSAGE BOX */}
      {!open && (
        <div
          className="message-box"
          onClick={() => setOpen(true)}
        >
          <FiSend className="message-icon" />

          <span className="message-title">Messages</span>

          <span className="message-count">2</span>

          <img
            src="/mess 1.jpg"
            alt="profile"
            className="message-user"
          />
        </div>
      )}

      {/* BIG MESSAGE PANEL */}
      {open && (
        <div className="message-panel">

          <div className="message-panel-header">
            <h2>Messages</h2>

            <div className="message-actions">
              <FiMaximize2 />
              <FiX
                onClick={() => setOpen(false)}
                className="close-message"
              />
            </div>
          </div>

          <div className="message-list">

            <div className="message-item">
              <img src="/mess 2.jpg" />

              <div>
                <h4>Sudhar Sanan B</h4>
                <p>You: ❤️ · 4h</p>
              </div>
            </div>

            <div className="message-item">
              <img src="/mess 1.jpg" />

              <div>
                <h4>Ariveyy 🌹</h4>
                <p>You: Vagi tharaaaaaa · 4h</p>
              </div>
            </div>

            <div className="message-item">
              <img src="/mess 3.jpg"/>

              <div>
                <h4>☆ LOKI ☆</h4>
                <p>You: Enna da sirikira · 15h</p>
              </div>
            </div>

            <div className="message-item">
              <img src="/mess 6.jpg" />

              <div>
                <h4>Dharshu. 🪽</h4>
                <p>sent an attachment. · 18h</p>
              </div>
            </div>

            <div className="message-item">
              <img src="/mess 5.jpg" />

              <div>
                <h4>Jothi Sudha</h4>
                <p>sent an attachment. · 19h</p>
              </div>
            </div>

            <div className="message-item">
              <img src="/mess 4.jpg"/>

              <div>
                <h4>EL Dorado</h4>
                <p>You sent an attachment. · 1d</p>
              </div>
            </div>

          </div>

          <button className="new-message">
            <FiEdit3 />
          </button>

        </div>
      )}
    </>
  );
};

export default Messages;
