import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Timer = ({ onFinished, progress = true }) => {
  const [progressBar, setProgressBar] = useState(0);
  const inProgressBar = useRef(progress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressBar((oldProgress) => {
        if (oldProgress === 100) {
          onFinished();
        }
        return Math.min(oldProgress + 3, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // useEffect(() => {
  //   if(progressBar > 100) {
  //     onFinished();
  //     setProgressBar(0);
  //   }
  // }, [progress]);

  // useEffect(() => {
  //   progressBar.current = progress;
  //   if (!progress) {
  //     setProgressBar(0);
  //   }
  // }, [progress]);

  return (
    <Box sx={{ width: "80%", marginLeft:'auto', marginRight:'auto'}}>
      <LinearProgress sx={{ height: 10, borderRadius:5}} variant="determinate" value={progressBar} />
    </Box>
  );
};
export default Timer;