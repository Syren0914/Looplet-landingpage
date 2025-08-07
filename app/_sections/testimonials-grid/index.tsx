import { Heading } from "@/common/heading";
import { TestimonialsList } from "./testimonials-list";

interface TestimonialsGridProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  quotes: Array<{
    _id: string;
    quote: string;
    author: {
      _id: string;
      _title: string;
      role: string;
      image?: {
        url: string;
        alt: string | null;
      };
      company: {
        _title: string;
        image?: {
          url: string;
          alt: string | null;
        };
      };
    };
  }>;
}

export function TestimonialsGrid({ _id, heading, quotes }: TestimonialsGridProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col gap-8">
        <Heading {...heading} />
        <TestimonialsList quotes={quotes} />
      </div>
    </section>
  );
}
