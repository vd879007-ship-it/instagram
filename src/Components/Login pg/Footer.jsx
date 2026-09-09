import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <footer className="footer">
        
      <div className="footer-links">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Popular</span>
        <span>Instagram Lite</span>
        <span>Meta AI</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
      </div>

      <div className="footer-bottom">
        <span>English ▾</span>
        <span>© 2026 Instagram from Meta</span>
      </div>

      <div className="windows-text">
        Activate Windows
        <br />
        <small>Go to Settings to activate Windows.</small>
      </div>

    </footer>
  );
};

export default Footer;