import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Timer = ({ onFinished }) => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressBar((oldProgress) => {
        if (oldProgress < 100) return Math.min(oldProgress + 1, 100);
        return oldProgress;
      });
    }, 100);

    if (progressBar === 100) onFinished();

    return () => {
      clearInterval(timer);
    };
  }, [onFinished, progressBar]);


  return (
    <Box sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <LinearProgress
        sx={{ height: 10, borderRadius: 5 }}
        variant="determinate"
        value={progressBar}
      />
    </Box>
  );
};

export default Timer;
