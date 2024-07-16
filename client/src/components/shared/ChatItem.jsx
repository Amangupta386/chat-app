import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

function ChatItem({
  avatar,
  name = "",
  _id = "",
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) {
 
  return (
   <Link
   sx={{
    padding:"0",
   }}
   to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e, _id, groupChat)}>
    <div style={{ display: "flex", alignItems: "center",
      gap: "1rem",
      padding:"1rem",
      backgroundColor: sameSender? "black": "white",
      color:sameSender?"white":"unset",
      position:"relative"
     }}>
      <AvatarCard avatar={avatar} />
      <Stack>
        <Typography>{name}</Typography>
        {
          newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )
        }
      </Stack>

      {
        isOnline && <Box
        sx={{
          width:"10px",
          height:"10px",
          borderRadius:"50%",
          position:"absolute",
          top:"50%",
          right:"1rem",
          transform:"translateY(-50%)",
        }}
        />
      }

    </div>

   </Link>
  )
}


export default memo(ChatItem);
