import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Timer = ({ onFinished, progress = false }) => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressBar((oldProgress) => {
        if (oldProgress < 100) {
          return Math.min(oldProgress + 3, 100);
        }
        onFinished();
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "80%", marginLeft:'auto', marginRight:'auto'}}>
      <LinearProgress sx={{ height: 10, borderRadius:5}} variant="determinate" value={progressBar} />
    </Box>
  );
};
export default Timer;