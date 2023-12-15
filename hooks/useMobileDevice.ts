import { useState, useEffect } from "react";

export const useMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(hasTouchSupport());
  });

  function hasTouchSupport() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  return [isMobile];
};
