import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { userNameValidators } from "../utils/validators";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// "xs": 0px to 600px
// "sm": 600px to 960px
// "md": 960px to 1280px
// "lg": 1280px to 1920px
// "xl": 1920px and above



function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  }

  const Username = useInputValidation("",userNameValidators);
  const email = useInputValidation("");
  const password = useStrongPassword("");
  const confirmPassword = useStrongPassword("");
  const avatar = useFileHandler("single");


  return (
    <div style={{ backgroundImage: "linear-gradient(rgb(236 72 72 / 50%), rgba(0, 0, 0, 0.5))" }}>
      <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography textAlign={"center"} variant="h5">
              Login
            </Typography>
            <>
              <form
                style={{
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  margin: "1rem",
                }}
              >
                <TextField
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  autoComplete="email"
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  autoComplete="password"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"} variant="h6">
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up Instead
                </Button>
              </form>
            </>
          </>
        ) : (
          <>
            <Typography textAlign={"center"} variant="h5">
              Register
            </Typography>
            <>
              <form
                style={{
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  margin: "1rem",
                }}
              >
                
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  <IconButton sx={{
                    position: "absolute",
                    bottom: "0",
                    right:"0",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover":{
                      bgcolor: "rgba(0, 0, 0, 0.8)",
                    }
                  }}
                  component={"label"}
                  >
                    <>
                    <PhotoCameraIcon />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                    </>

                  </IconButton>
                </Stack>

                {avatar.error && 
                (<Typography m={"1rem"} color="error" variant="caption">{avatar.error}</Typography>)}


                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  autoComplete="name"
                  value={Username.value}
                  onChange={Username.changeHandler}
                />
                {Username.error && 
                (<Typography color="error" variant="caption">{Username.error}</Typography>)}

                <TextField
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  autoComplete="email"
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  autoComplete="password"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && 
                (<Typography color="error" variant="caption">{password.error}</Typography>)}

                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  autoComplete="confirmPassword"
                  variant="outlined"
                  value={confirmPassword.value}
                  onChange={confirmPassword.changeHandler}
                />

                <Button
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  onSubmit={submitHandler}
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} m={"1rem"} variant="h6">
                  OR
                </Typography>
                <Button fullWidth variant="text" onClick={handleLogin}>
                  Login Instead
                </Button>
              </form>
            </>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
}

export default Login;
