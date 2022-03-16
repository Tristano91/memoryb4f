import React, { useEffect, useState, useRef } from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Time = ({
    progress = false,
    onFinished,
}) => {
  const [progressBar, setProgress] = useState(0);
  const shouldProgressRef = useRef(progress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (shouldProgressRef.current) {
            return Math.min(100, oldProgress + 100 / 120);
        }
          return oldProgress;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
      if(progressBar > 100) {
        onFinished();
          setProgress(0)
      }
  }, [progress]);

  useEffect(() => {
    shouldProgressRef.current = progress;
    if (!progress) {
      setProgress(0);
    }
  }, [progress]);

  return (
    <Box sx={{ width: '80%', marginLeft:"auto", marginRight:"Auto" }}>
      <LinearProgress style={{ height: 10}} color="secondary" variant="determinate" value={progressBar} />
    </Box>
  );
}

export default Time;