"use client"
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size immediately
    handleResize();
    
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const Component = () => {
  const { width, height } = useWindowSize();

  // Don't render until we have dimensions to prevent hydration mismatch
  if (width === 0 || height === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col items-center")}>
        <UnicornScene 
        production={true} projectId="P4LJZ64V0WnNT3hrMnGJ" width={width} height={height} />
    </div>
  );
};

