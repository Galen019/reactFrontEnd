import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/players", {
        name: playerName,
      });
      alert(`Response: ${response.status}`);
    } catch (error) {
      console.error("There was an error submitting the username!", error);
      alert("There was an error submitting the username!");
    }
  };

  return (
    <>
      <h1>Enter Username</h1>

      <div>
        <TextField
          variant="outlined"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          color="inherit"
          onClick={handleSubmit}
          sx={{
            marginTop: 2,
            width: "100%",
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default App;
