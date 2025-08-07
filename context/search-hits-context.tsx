"use client";

import { createContext, useContext } from "react";

export interface AvatarFragment {
  url: string;
  alt: string | null;
}

interface SearchHitsContextType {
  hits: Array<{
    _id: string;
    _title: string;
    _slug: string;
    _type: string;
    excerpt?: string;
    image?: AvatarFragment;
  }>;
}

const SearchHitsContext = createContext<SearchHitsContextType | null>(null);

export function SearchHitsProvider({ children, value }: { children: React.ReactNode; value: SearchHitsContextType }) {
  return <SearchHitsContext.Provider value={value}>{children}</SearchHitsContext.Provider>;
}

export function useSearchHits() {
  const context = useContext(SearchHitsContext);
  if (!context) {
    throw new Error("useSearchHits must be used within a SearchHitsProvider");
  }
  return context;
}
