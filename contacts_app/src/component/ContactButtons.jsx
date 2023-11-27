import { Button, Grid, Stack } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import EmailIcon from "@mui/icons-material/Email";

const buttonStyle = {
  color: "primary",
  padding: { xs: 1, sm: 2 },
  fontSize: { xs: "0.5rem", sm: "0.7rem" },
};
const ContactButtons = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3}>
        <Button fullWidth sx={buttonStyle}>
          <Stack alignItems="center">
            <MessageIcon sx={{ fontSize: "1.5rem" }} />
            Message
          </Stack>
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button fullWidth sx={buttonStyle}>
          <Stack alignItems="center">
            <CallIcon sx={{ fontSize: "1.5rem" }} />
            Call
          </Stack>
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button fullWidth sx={buttonStyle}>
          <Stack alignItems="center">
            <VideoChatIcon sx={{ fontSize: "1.5rem" }} />
            FaceTime
          </Stack>
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button fullWidth sx={buttonStyle}>
          <Stack alignItems="center">
            <EmailIcon sx={{ fontSize: "1.5rem" }} />
            Mail
          </Stack>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactButtons;
