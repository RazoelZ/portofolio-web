import { useEffect } from "react";

export const useAnimatedTitle = (text: string) => {
  // const index = useRef(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const rotated =
  //       text.slice(index.current) + " " + text.slice(0, index.current);
  //     document.title = rotated;
  //     index.current = (index.current + 1) % text.length;
  //   }, speed);

  //   return () => clearInterval(interval);
  // }, [text, speed]);

  useEffect(() => {
    document.title = text;
  });
};
