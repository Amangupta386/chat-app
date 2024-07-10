import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
const AppLayout = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name

  return (props) => {
    
  const params = useParams()
  const chatId = params.chatId;

    return (
      <>
        <Title title={"Chat App"} />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList chats={sampleChats} chatId={"1"}
            newMessagesAlert={[{
              chatId:"1",
              count:4,
            }]}
            onlineUsers={["1", "2"]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}

          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" },
            padding: "2rem",
            bgcolor:"rgba(0, 0, 0, 0.85)",
          }}  
            height={"100%"}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
