import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

export default function MuiButton() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="#!">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="text" color="success">Success</Button>
      </Stack>
      <Stack display={'block'} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      <Stack  spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon/>} disableRipple>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
        <IconButton color="success" onClick={() => alert('sent the message')}>
            <SendIcon/>
        </IconButton>
      </Stack>
    </Stack>
  );
}
