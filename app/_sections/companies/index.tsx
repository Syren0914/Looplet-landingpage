import { Heading } from "@/common/heading";

interface CompaniesProps {
  _id: string;
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: string;
  };
  companies: Array<{
    _id: string;
    _title: string;
    logo: {
      url: string;
      alt: string | null;
    };
  }>;
}

export function Companies({ _id, heading, companies }: CompaniesProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Heading {...heading} />
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => (
            <div key={company._id} className="flex items-center justify-center">
              <img
                alt={company.logo.alt ?? company._title}
                className="h-12 w-auto grayscale opacity-60 transition-opacity hover:opacity-100"
                src={company.logo.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
