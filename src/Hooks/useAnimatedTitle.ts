import { useEffect, useRef } from "react";

export const useAnimatedTitle = (text: string, speed = 300) => {
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const rotated =
        text.slice(index.current) + " " + text.slice(0, index.current);
      document.title = rotated;
      index.current = (index.current + 1) % text.length;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
};
