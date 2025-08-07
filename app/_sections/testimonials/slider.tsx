"use client";

import { ButtonLink } from "@/common/button";
import { Heading } from "@/common/heading";
import { QuoteFragment } from "@/lib/static-data";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface TestimonialsSliderProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  quotes: QuoteFragment[];
}

export function Testimonials({ _id, heading, quotes }: TestimonialsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [WheelGesturesPlugin()],
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col gap-8">
        <Heading {...heading} />
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {quotes.map((quote) => (
                <div key={quote._id} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <div className="flex h-full flex-col gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] p-6 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
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
                </div>
              ))}
            </div>
          </div>
          <ButtonLink
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[--border] bg-[--surface-primary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-primary] disabled:opacity-50"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            unstyled
          >
            <ChevronLeftIcon className="size-4" />
          </ButtonLink>
          <ButtonLink
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[--border] bg-[--surface-primary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-primary] disabled:opacity-50"
            onClick={scrollNext}
            unstyled
          >
            <ChevronRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
