import { AccordionFaq } from "./accordion";

interface AccordionFaqComponentProps {
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
  eventsKey?: string;
}

export function AccordionFaqComponent({ _id, heading, items, eventsKey }: AccordionFaqComponentProps) {
  return <AccordionFaq _id={_id} heading={heading} items={items} eventsKey={eventsKey} />;
}

// Export the AccordionFaq component directly for backward compatibility
export { AccordionFaq };
