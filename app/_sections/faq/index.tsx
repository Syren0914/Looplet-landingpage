import { Heading } from "@/common/heading";

interface FaqProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  items: Array<{
    _id: string;
    question: string;
    answer: string;
  }>;
}

export function Faq({ _id, heading, items }: FaqProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Heading {...heading} />
        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <details
              key={item._id}
              className="group rounded-lg border border-[--border] bg-[--surface-secondary] dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium text-[--text-primary] dark:text-[--dark-text-primary]">
                {item.question}
                <svg
                  className="h-5 w-5 transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="border-t border-[--border] p-6 dark:border-[--dark-border]">
                <p className="text-[--text-secondary] dark:text-[--dark-text-secondary]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
