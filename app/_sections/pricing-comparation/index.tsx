import { Heading } from "@/common/heading";

interface PricingComparisonProps {
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
    features: Array<{
      _id: string;
      _title: string;
      included: boolean;
    }>;
    cta: {
      label: string;
      href: string;
      type: string;
    };
    popular?: boolean;
  }>;
}

export function PricingTable({ _id, heading, plans }: PricingComparisonProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Heading {...heading} />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4">Features</th>
                {plans.map((plan) => (
                  <th key={plan._id} className="text-center p-4">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold">{plan._title}</h3>
                      <p className="text-2xl font-bold">{plan.price}</p>
                      <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                        {plan.description}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0]?.features.map((feature) => (
                <tr key={feature._id} className="border-t border-[--border] dark:border-[--dark-border]">
                  <td className="p-4 font-medium">{feature._title}</td>
                  {plans.map((plan) => {
                    const planFeature = plan.features.find(f => f._id === feature._id);
                    return (
                      <td key={plan._id} className="text-center p-4">
                        {planFeature?.included ? (
                          <svg className="mx-auto h-5 w-5 text-[--accent-500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-[--text-tertiary] dark:text-[--dark-text-tertiary]">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
