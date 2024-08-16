import { Box, Button, TextField } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "cyan",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "40%",
          width: "40%",
          backgroundColor: "white",
          borderRadius: 3,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          pt: 10,
        }}
      >
        <TextField
          id="name"
          label="Enter Your Name"
          variant="outlined"
          sx={{ width: "80%" }}
        />
        <TextField
          id="noOfQuesions"
          label="Enter Number of Questions"
          aria-hidden
          variant="outlined"
          sx={{ width: "80%" }}
        />
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="outlined">Clear</Button>
          <Button variant="outlined">Clear</Button>

        </Box>
      </Box>
    </Box>
  );
};

export default App;
