/* reference: https://usehooks.com/useWindowSize/ */
import { useAtom } from "jotai";
import { useEffect } from "react";
import { windowSizeAtom } from "../store";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useAtom(windowSizeAtom);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
