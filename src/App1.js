import { Box, Button, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    noOfQuestions: 0,
    isSubmitted: false,
  });

  const submit = () => {
    console.log(data);
    setData({ ...data, isSubmitted: true });
  };
  return (
    <>
    {!data.isSubmitted ?(
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
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <Tooltip title="Enter no of Questions, you want to fell...">
          <TextField
            id="noOfQuesions"
            label="Enter Number of Questions"
            aria-hidden
            variant="outlined"
            sx={{ width: "80%" }}
            value={data.noOfQuestions}
            onChange={(e) =>
              setData({ ...data, noOfQuestions: e.target.value })
            }
          />
        </Tooltip>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              setData({ name: "", noOfQuestions: 0 });
            }}
          >
            Clear
          </Button>
          <Button variant="contained" onClick={submit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>):(
      <Box>
        sa
      </Box>
    )}

    </>
  );
};

export default App;
