import { Button, Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Add";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div>
      <Button variant="text">TEXT</Button>
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        color="otherColor"
        size="small"
      >
        SETTING
      </Button>
      <Button variant="contained" startIcon={<AddIcon />} color="success">
        ADD NEW POST
      </Button>
      <Button variant="outlined" disabled>
        OUTLINED
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's p tag
      </Typography>
      <BlueButton>MY UNIQUE BlueButton</BlueButton>
      <BlueButton>Another BlueButton</BlueButton>
    </div>
  );
}

export default App;
