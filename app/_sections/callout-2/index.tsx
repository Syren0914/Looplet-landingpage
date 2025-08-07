import { Button } from "@/common/button";
import { Heading } from "@/common/heading";

interface Callout2Props {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  description: string;
  cta?: {
    label: string;
    href: string;
    type: string;
  };
  eventsKey?: string;
}

export function Callout2({ _id, heading, description, cta, eventsKey }: Callout2Props) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
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
    </section>
  );
}
