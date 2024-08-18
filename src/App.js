import { Box, Typography } from "@mui/material";
import { decode } from "html-entities";
import React, { Fragment, useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=15");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.results);
        // setData(response.results);
        console.log(json);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <Box sx={{ bgcolor: "whitesmoke", height: "70vh", width: "90vw", p: 2 }}>
        {data &&
          data.map((item, key) => (
            <Fragment key={key}>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography variant="h4" gutterBottom>
                  {key}
                </Typography>
                &nbsp;&nbsp;
                <Typography variant="h5">{decode(item.question)}</Typography>
              </Box>
            </Fragment>
          ))}
      </Box>
    </Box>
  );
};

export default App;
