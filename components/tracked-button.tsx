"use client";

import { Button } from "@/common/button";
import { ButtonHTMLAttributes } from "react";

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  eventsKey?: string;
  eventName?: string;
  eventProperties?: Record<string, any>;
}

export function TrackedButton({
  eventsKey,
  eventName,
  eventProperties,
  children,
  ...props
}: TrackedButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Simple event tracking without Basehub
    if (eventName) {
      console.log("Event tracked:", eventName, eventProperties);
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}
