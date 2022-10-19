import { useState, useEffect } from 'react';

function useAnimationTimer(time: number = 1000) {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, time);
    return (() => {
      clearTimeout(timer);
    })
  }, []);

  return isStarted;
}

export default useAnimationTimer;