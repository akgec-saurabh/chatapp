import {
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import React from "react";
import Chatbar from "../Chatbar/Chatbar";
import SearchBar from "../SearchBar/SearchBar";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarNavbar">
        <div className="sidebarHeading">Chats</div>
        <div className="sidebarNav">
          <div className="icon__wrapper">
            <ChatBubbleOutlineOutlined className="icon" />
          </div>
          <div className="icon__wrapper">
            <MoreHorizOutlined className="icon" />
          </div>
        </div>
      </div>
      <SearchBar />
      <Chatbar />
    </div>
  );
};

export default SideBar;
