// code from "https://dev.to/biomathcode/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98"
import { useState, useEffect } from "react";

export const scrollDirections = {
  DOWN: "down",
  UP: "up",
};

export default function useScroll() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // set up event listeners
  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
        };
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}
