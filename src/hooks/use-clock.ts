import { useState, useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

// Helper function to format the current time
const getFormattedTime = (): string => {
  const now = new Date();
  return format(now, "HH:mm:ss", { locale: id });
};

export const useClock = (): string => {
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime());

  useEffect(() => {
    const updateTime = () => setCurrentTime(getFormattedTime());

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return currentTime;
};
