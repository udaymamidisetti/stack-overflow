import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CampaignIcon from "@mui/icons-material/Campaign";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

//drawer Styles

import { useTheme } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import { useDispatch } from "react-redux";
import { setSearch } from "../../Redux/Slices/HeaderSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const drawerWidth = 400;

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearch(input));
  };

  return (
    <>
      <div className="header-container">
        <MenuIcon onClick={handleDrawerOpen} style={{ cursor: "pointer" }} />
        <div className="search-container">
          <div className="Header-Search-div">
            <SearchIcon />
            <form onSubmit={handleSearch}>
              <input
                className="Header-input"
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
          <div className="profile-container">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <LanguageIcon />
              <p>Help</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <PersonalVideoIcon />
              <p>Tour</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon />
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>
      </div>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <button
            onClick={handleDrawerClose}
            style={{
              border: "1px",
              position: "absolute",
              left: "350px",
              top: "110px",
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </button>
        </div>
        <img
          style={{ height: "157px", width: "250px" }}
          src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Logo.wine.png"
          alt="img"
        />
        <div style={{ marginLeft: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <QuestionMarkIcon />
            <p>Questions</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <WorkOutlineIcon />
            <p>Jobs</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <VideoFileIcon />
            <p>Documentation</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LocalOfferIcon />
            <p>Tags</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <PersonOutlineIcon />
            <p>Users</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LabelImportantIcon />
            <p>Badges</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <CampaignIcon />
            <p>Ask Question</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <InsertCommentIcon />
            <p>Stack Exchange</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MoveToInboxIcon />
            <p>Inbox</p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
