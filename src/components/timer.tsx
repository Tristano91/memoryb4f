import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Time } from "../app/types";

const Timer = ({ onFinished, progress = true }: Time) => {
  const [progressBar, setProgressBar] = useState(0);
  const InProgress = useRef(progress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressBar((oldProgress) => {
        if (oldProgress < 100) {
          return Math.min(oldProgress + 3, 100);
        }
        return oldProgress;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progressBar >= 100) {
      onFinished();
    }
  });

  useEffect(() => {
    if(!InProgress.current) {
      setProgressBar(0);
    }
  })

  return (
    <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <LinearProgress
        sx={{ height: 10, borderRadius: 5 }}
        variant="determinate"
        value={progressBar}
      />
    </Box>
  );
};

export default Timer;
