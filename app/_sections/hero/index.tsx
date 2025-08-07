import { Button } from "@/common/button";
import { Heading } from "@/common/heading";

interface HeroProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  description?: string;
  cta: {
    label: string;
    href: string;
    type: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    type: string;
  };
  image?: {
    url: string;
    alt: string | null;
  };
  eventsKey?: string;
}

export function Hero({ _id, heading, description, cta, secondaryCta, image, eventsKey }: HeroProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <Heading {...heading} />
        {description && (
          <p className="mt-6 text-lg text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href={cta.href} type={cta.type as any}>
            {cta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} type={secondaryCta.type as any} variant="outline">
              {secondaryCta.label}
            </Button>
          )}
        </div>
        {image && (
          <div className="mt-12">
            <img
              alt={image.alt ?? "Hero image"}
              className="mx-auto max-w-full rounded-lg"
              src={image.url}
            />
          </div>
        )}
      </div>
    </section>
  );
}
