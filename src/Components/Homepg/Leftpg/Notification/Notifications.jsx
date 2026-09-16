import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Notifications.css";

const notificationsData = {
  today: [
    {
      id: 1,
      user: "dr.shakthi_chandran",
      img: "/boy 3.jpg",
      text: "replied to your comment on dr.shakthi_chandran's post: Thanks! ❤️ Check your DM for details.",
      time: "14h",
      type: "reply",
    },
    {
      id: 2,
      user: "_dadz_girl_2007",
      img: "/girl 4.jpg",
      text: "started following you.",
      time: "14h",
      type: "follow",
    },
    {
      id: 3,
      user: "kavi._psk",
      img: "/mess 3.jpg",
      text: "liked your photo.",
      time: "12h",
      type: "like",
    },
    {
      id: 4,
      user: "5zu_fx",
      img: "/boy 1 (2)",
      text: "started following you.",
      time: "10h",
      type: "follow",
    },
    {
      id: 5,
      user: "_sathya_se",
      img: "/girl 2.jpg",
      text: "commented: Nice pic! 🔥",
      time: "8h",
      type: "reply",
    },
  ],
  thisWeek: [
    {
      id: 6,
      user: "d7trixx",
      img: "/boy 4.jpg",
      text: "mentioned you in a comment: @sai_87746 Please Check DM",
      time: "2d",
      type: "mention",
    },
    {
      id: 7,
      user: "zerosoul___",
      img: "/mess 1.jpg",
      text: "posted a thread you might be interested in: Yar intha 🥵",
      hashtags: ["#fashionstyle", "#fitness", "#fashmodal", "#ootymodel", "#ootypaiyan"],
      time: "5d",
      type: "thread",
    },
    {
      id: 8,
      user: "yazhini_maran",
      img: "/girl 1.jpg",
      text: "liked your photo.",
      time: "3d",
      type: "like",
    },
    {
      id: 9,
      user: "jagan_official",
      img: "/mess 4.jpg",
      text: "started following you.",
      time: "4d",
      type: "follow",
    },
    {
      id: 10,
      user: "anisha_makeover",
      img: "/girl 4.jpg",
      text: "commented: 😍😍😍",
      time: "6d",
      type: "reply",
    },
  ],
  thisMonth: [
    {
      id: 11,
      user: "natural_crazyy_.",
      img: "/mess 2.jpg",
      text: "mentioned you in a comment: @sai_87746",
      time: "6d",
      type: "mention",
    },
    {
      id: 12,
      user: "gameover_yt",
      img: "/notif11.jpg",
      text: "started following you.",
      time: "2w",
      type: "follow",
    },
    {
      id: 13,
      user: "arun_vishal",
      img: "/mess 3.jpg",
      text: "liked your video.",
      time: "3w",
      type: "like",
    },
    {
      id: 14,
      user: "sasikumar_ilaiyaraj",
      img: "/boy 3.jpg",
      text: "commented: Semma bro 🔥🔥",
      time: "3w",
      type: "reply",
    },
    {
      id: 15,
      user: "thilaka_here",
      img: "/mess 4.jpg",
      text: "started following you.",
      time: "4w",
      type: "follow",
    },
  ],
};

const Notifications = ({ onClose }) => {
  return (
    <div className="notifications-panel">
      <div className="notifications-header">
        <h2>Notifications</h2>
        <FaTimes className="close-icon" onClick={onClose} />
      </div>

      <div className="notifications-tabs">
        <span className="notif-tab active">All</span>
        <span className="notif-tab">People you follow</span>
        <span className="notif-tab">Comments</span>
        <span className="notif-tab">Follows</span>
        <span className="notif-tab">Tags</span>
      </div>

      <div className="notifications-list">
        {/* TODAY */}
        <div className="notif-section">
          <h3>Today</h3>
          {notificationsData.today.map((n) => (
            <div className="notif-item" key={n.id}>
              <img src={n.img} alt={n.user} className="notif-avatar" />
              <div className="notif-text">
                <span>
                  <b>{n.user}</b> {n.text} <span className="notif-time">{n.time}</span>
                </span>
              </div>
             {n.type === "follow" ? (
  <button className="following-btn">Following</button>
) : (
  <button className="follow-btn-blue">Follow</button>
)}
            </div>
          ))}
        </div>

        {/* THIS WEEK */}
        <div className="notif-section">
          <h3>This week</h3>
          {notificationsData.thisWeek.map((n) => (
            <div className="notif-item" key={n.id}>
              {n.img ? (
                <img src={n.img} alt={n.user} className="notif-avatar ring" />
              ) : (
                <div className="notif-avatar-placeholder"></div>
              )}
              <div className="notif-text">
                {n.type === "thread" ? (
                  <>
                    <p>
                      <b>{n.user}</b> {n.text}
                    </p>
                    <div className="notif-hashtags">
                      {n.hashtags.map((tag, i) => (
                        <a href="#" key={i}>{tag}</a>
                      ))}
                    </div>
                    <span className="notif-time">{n.time}</span>
                  </>
                ) : (
                  <span>
                    <b>{n.user}</b> {n.text} <span className="notif-time">{n.time}</span>
                  </span>
                )}
              </div>
                   {n.type === "follow" && (
                    <button className="following-btn">Following</button>
                )}
                 {n.type !== "follow" && n.type !== "thread" && (
                 <button className="follow-btn-blue">Follow</button>
            )}
            </div>
          ))}
        </div>

        {/* THIS MONTH */}
        <div className="notif-section">
          <h3>This month</h3>
          {notificationsData.thisMonth.map((n) => (
            <div className="notif-item" key={n.id}>
              <img src={n.img} alt={n.user} className="notif-avatar" />
              <div className="notif-text">
                <span>
                  <b>{n.user}</b> {n.text} <span className="notif-time">{n.time}</span>
                </span>
              </div>
             {n.type === "follow" ? (
  <button className="following-btn">Following</button>
) : (
  <button className="follow-btn-blue">Follow</button>
)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
