import { Testimonials } from "./slider";

interface TestimonialsSliderProps {
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

export function TestimonialsSlider({ _id, heading, quotes }: TestimonialsSliderProps) {
  return <Testimonials _id={_id} heading={heading} quotes={quotes} />;
}

// Export the Testimonials component directly for backward compatibility
export { Testimonials };
