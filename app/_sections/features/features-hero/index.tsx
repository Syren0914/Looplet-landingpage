import { Button } from "@/common/button";
import { Heading } from "@/common/heading";

interface FeatureHeroProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  description: string;
  image?: {
    url: string;
    alt: string | null;
  };
  cta?: {
    label: string;
    href: string;
    type: string;
  };
  eventsKey?: string;
}

export default function FeatureHero({ _id, heading, description, image, cta, eventsKey }: FeatureHeroProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Heading {...heading} />
            <p className="mt-6 text-lg text-[--text-secondary] dark:text-[--dark-text-secondary]">
              {description}
            </p>
            {cta && (
              <div className="mt-8">
                <Button href={cta.href} type={cta.type as any}>
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
          {image && (
            <div className="flex items-center justify-center">
              <img
                alt={image.alt ?? "Feature hero image"}
                className="max-w-full rounded-lg"
                src={image.url}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
