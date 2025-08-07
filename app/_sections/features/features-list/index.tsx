import { Button } from "@/common/button";
import { Heading } from "@/common/heading";

interface FeaturesListProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  features: Array<{
    _id: string;
    _title: string;
    description: string;
    icon?: string;
    cta?: {
      label: string;
      href: string;
      type: string;
    };
  }>;
}

export function FeaturesList({ _id, heading, features }: FeaturesListProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Heading {...heading} />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature._id} className="flex flex-col gap-4">
              {feature.icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[--accent-500-10]">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              )}
              <h3 className="text-xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                {feature._title}
              </h3>
              <p className="text-[--text-secondary] dark:text-[--dark-text-secondary]">
                {feature.description}
              </p>
              {feature.cta && (
                <Button
                  href={feature.cta.href}
                  type={feature.cta.type as any}
                  className="mt-auto"
                >
                  {feature.cta.label}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
