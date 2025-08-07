import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AccordionFaq } from "../_sections/accordion-faq";
import { BigFeature, bigFeatureFragment } from "../_sections/features/big-feature";
import { Callout, calloutFragment } from "../_sections/callout-1";
import { Callout2, calloutv2Fragment } from "../_sections/callout-2";
import { Companies, companiesFragment } from "../_sections/companies";
import { Faq, faqFragment } from "../_sections/faq";
import { FeaturesGrid, featuresGridFragment } from "../_sections/features/features-grid";
import { FeaturesList, featureCardsComponent } from "../_sections/features/features-list";
import { Hero, heroFragment } from "../_sections/hero";
import { Pricing, pricingFragment } from "../_sections/pricing";
import { SideFeatures, featuresSideBySideFragment } from "../_sections/features/side-features";
import { Testimonials, testimonialsSliderFragment } from "../_sections/testimonials";
import { TestimonialsGrid, testimonialsGridFragment } from "../_sections/testimonials-grid";
import { PricingTable } from "../_sections/pricing-comparation";
import { pricingTableFragment } from "../_sections/pricing-comparation/fragments";
import FeatureHero, { featureHeroFragment } from "../_sections/features/features-hero";
import { PageView } from "../../components/page-view";
import { FreeformText, freeformTextFragment } from "../_sections/freeform-text";
import { Form, formFragment } from "../_sections/form";
import {
  settingsLogoLiteFragment,
  SettingsLogoLiteFragment,
} from "../../components/form-components";
import { defaultStaticData } from "@/lib/static-data";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateStaticParams = async () => {
  // Use static data instead of Basehub query
  return defaultStaticData.pages.items.map((item) => ({
    slug: item.pathname.split("/").filter(Boolean),
  }));
};

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata | undefined> => {
  const params = await _params;
  
  // Use static data instead of Basehub query
  const page = defaultStaticData.pages.items.find(
    (item) => item.pathname === (params.slug ? `/${params.slug.join("/")}` : "/")
  );

  if (!page) {
    return notFound();
  }

  return {
    title: page.metadataOverrides?.title ?? "Your Website",
    description: page.metadataOverrides?.description ?? "Welcome to our website",
  };
};

function SectionsUnion({
  sections,
  eventsKey,
  settings,
}: {
  sections: any[];
  eventsKey: string;
  settings: SettingsLogoLiteFragment;
}): React.ReactNode {
  if (!sections) return null;

  return sections.map((comp) => {
    switch (comp.__typename) {
      case "HeroComponent":
        return <Hero {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "FeaturesCardsComponent":
        return <FeaturesList {...comp} key={comp._id} />;
      case "FeaturesGridComponent":
        return <FeaturesGrid {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "CompaniesComponent":
        return <Companies {...comp} key={comp._id} />;
      case "FeaturesBigImageComponent":
        return <BigFeature {...comp} key={comp._id} />;
      case "FeaturesSideBySideComponent":
        return <SideFeatures {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "CalloutComponent":
        return <Callout {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "CalloutV2Component":
        return <Callout2 {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "TestimonialSliderComponent":
        return <Testimonials {...comp} key={comp._id} />;
      case "TestimonialsGridComponent":
        return <TestimonialsGrid {...comp} key={comp._id} />;
      case "PricingComponent":
        return <Pricing {...comp} key={comp._id} />;
      case "FaqComponent":
        return <Faq {...comp} key={comp._id} />;
      case "FaqComponent":
        return <AccordionFaq {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "PricingTableComponent":
        return <PricingTable {...comp} key={comp._id} />;
      case "FeatureHeroComponent":
        return <FeatureHero {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "FreeformTextComponent":
        return <FreeformText {...comp} key={comp._id} />;
      case "FormComponent":
        return <Form {...comp} key={comp._id} settingsLogoLite={settings} />;
      default:
        return null;
    }
  });
}

export default async function DynamicPage({
  params: _params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await _params;
  const slugs = params.slug;

  // Use static data instead of Basehub query
  const { pages, generalEvents, settings } = defaultStaticData;

  const page = pages.items.find(
    (item) => item.pathname === (slugs ? `/${slugs.join("/")}` : "/")
  );

  if (!page) notFound();

  const sections = page.sections;

  return (
    <>
      <PageView ingestKey={generalEvents.ingestKey} />
      <SectionsUnion sections={sections} eventsKey={generalEvents.ingestKey} settings={settings} />
    </>
  );
}
