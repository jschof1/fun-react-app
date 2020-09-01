import { useState } from "react";

export const useStopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [ticker, setTicker] = useState(null);

  const update = () => {
    const start = elapsed > 0 ? Date.now() - elapsed : Date.now();
    setTicker(setInterval(() => setElapsed(Date.now() - start), 100));
  };

  return {
    elapsedTime: (elapsed / 1000).toFixed(1),
    startTime: () => update(),
    resetTime: () => setElapsed(0),
    stopTime: () => clearInterval(ticker)
  };
};
