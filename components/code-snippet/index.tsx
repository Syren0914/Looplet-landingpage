import React from "react";
import { CopyButton } from "./copy-button";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = "text", filename, className }: CodeBlockProps) {
  return (
    <div className={`rounded-lg border border-[--border] dark:border-[--dark-border] ${className}`}>
      {filename && (
        <div className="border-b border-[--border] bg-[--surface-secondary] px-4 py-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
          <span className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {filename}
          </span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <CopyButton code={code} />
      </div>
    </div>
  );
}

export type Language = string;
