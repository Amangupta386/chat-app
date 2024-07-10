import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../constants/color";
import React, { Suspense, lazy, useState } from "react";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import LayoutLoader from "./Loaders";

const SearchDialog =lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroup = lazy(() => import("../specific/NewGroup"));

function Header() {
  const navigate = useNavigate();

  const [isSearch, setisSearch] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    console.log("mobile");
    setMobile((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup("new group");
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const openSearchDialog = () => {
    console.log("search dialog");
    setisSearch((prev) => !prev);
  };

  const logoutHandler = () => {
    console.log((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 6 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              DuoTalk App
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" size="large" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IcnBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />

              <IcnBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IcnBtn
                title="Manage Groups"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IcnBtn
                title="Notifications"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IcnBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box>Final</Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
      <Suspense fallback={<Backdrop open/>}>
          <SearchDialog />
        </Suspense>
      )}
      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog />
        </Suspense>
      )}
      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroup />
        </Suspense>
      )}
    </div>
  );
}

const IcnBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
