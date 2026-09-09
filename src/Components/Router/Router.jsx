import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leftsection from "../Login pg/Leftsection";
import Login from "../Login pg/Login";
import Footer from "../Login pg/Footer";
import Home from "../Homepg/Home";
import Profile from "../Profile/Profile";
import LeftSidebar from "../Homepg/Leftpg/Leftsidebar"
import Reels from "../Reels/Reels";
import Mess from "../Mess/Mess";
import Search from "../Search/Search";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/home" element={
          <>
            <LeftSidebar />
            <Home />
          </>
        } />

        {/* PROFILE */}
        <Route path="/profile" element={
          <>
            <LeftSidebar />
            <Profile />
          </>
        } />

        {/* MESSAGES */}
        <Route path="/messages" element={
          <>
            <LeftSidebar />
            <Mess />
          </>
        } />

        <Route path="/search" element={
          <>
            <LeftSidebar />
            <Search />
          </>
        } />

        {/* REELS */}
        <Route path="/reels" element={
          <>
            <LeftSidebar />
            <Reels />
          </>
        } />

        {/* LOGIN */}
        <Route path="/" element={
          <>
            <div className="loginleft">
              <Leftsection />
              <Login />
            </div>

            <Footer />
          </>
        } />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;