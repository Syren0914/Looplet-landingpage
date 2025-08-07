import { Button } from "@/common/button";
import { Heading } from "@/common/heading";

interface PricingProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  plans: Array<{
    _id: string;
    _title: string;
    price: string;
    description: string;
    features: string[];
    cta: {
      label: string;
      href: string;
      type: string;
    };
    popular?: boolean;
  }>;
}

export function Pricing({ _id, heading, plans }: PricingProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Heading {...heading} />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`rounded-lg border p-8 ${
                plan.popular
                  ? "border-[--accent-500] bg-[--surface-secondary] dark:bg-[--dark-surface-secondary]"
                  : "border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary]"
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block rounded-full bg-[--accent-500] px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                {plan._title}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                  {plan.price}
                </span>
                <span className="ml-1 text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                  /month
                </span>
              </div>
              <p className="mt-4 text-[--text-secondary] dark:text-[--dark-text-secondary]">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="mr-3 h-5 w-5 text-[--accent-500]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                href={plan.cta.href}
                type={plan.cta.type as any}
              >
                {plan.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
