"use client";

import { useEffect } from "react";

interface PageViewProps {
  ingestKey?: string;
}

export function PageView({ ingestKey }: PageViewProps) {
  useEffect(() => {
    // Simple page view tracking without Basehub
    console.log("Page view tracked:", ingestKey);
  }, [ingestKey]);

  return null;
}
