"use client";

import { QuoteFragment } from "@/lib/static-data";

interface TestimonialsListProps {
  quotes: QuoteFragment[];
}

export function TestimonialsList({ quotes }: TestimonialsListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {quotes.map((quote) => (
        <div key={quote._id} className="flex flex-col gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] p-6 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
          <blockquote className="flex-1 text-[--text-secondary] dark:text-[--dark-text-secondary]">
            "{quote.quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            {quote.author.image && (
              <img
                alt={quote.author.image.alt ?? "Author"}
                className="size-10 rounded-full"
                height={40}
                src={quote.author.image.url}
                width={40}
              />
            )}
            <div className="flex flex-col">
              <cite className="not-italic font-medium text-[--text-primary] dark:text-[--dark-text-primary]">
                {quote.author._title}
              </cite>
              <span className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                {quote.author.role}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
