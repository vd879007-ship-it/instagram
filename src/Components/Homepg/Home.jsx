import React, { useState } from "react";
import "./Home.css";
import LeftSidebar from "./Leftpg/Leftsidebar";
import Suggestion from "./Leftpg/Suggestion/Suggestion";
import MainReel from "./Leftpg/Main/Mainreel";
import Messages from "./Leftpg/Message/Message";
import Notifications from "./Leftpg/Notification/Notifications";

const Home = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div>
      <LeftSidebar onNotificationClick={() => setShowNotifications(true)} />
      <MainReel />
      <Suggestion />
      <Messages />

      {showNotifications && (
        <Notifications onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
};

export default Home;