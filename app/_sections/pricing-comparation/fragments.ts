// Static types for pricing comparison
export interface PricingTableFragment {
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
