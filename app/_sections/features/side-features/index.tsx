import { Button } from "@/common/button";
import { Heading } from "@/common/heading";

interface SideFeaturesProps {
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
  }>;
  eventsKey?: string;
}

export function SideFeatures({ _id, heading, features, eventsKey }: SideFeaturesProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Heading {...heading} />
        <div className="mt-12 space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature._id}
              className={`flex flex-col gap-8 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  {feature.icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[--accent-500-10]">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                      {feature._title}
                    </h3>
                    <p className="mt-4 text-[--text-secondary] dark:text-[--dark-text-secondary]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-video rounded-lg bg-[--surface-secondary] dark:bg-[--dark-surface-secondary]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
