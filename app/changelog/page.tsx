import type { Metadata } from "next";
import { ChangelogList } from "./_components/changelog-list";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Latest updates and changes to our platform",
};

// Static changelog data
const changelogPosts = [
  {
    _id: "1",
    _title: "New Dashboard Features",
    _slug: "new-dashboard-features",
    excerpt: "We've added new dashboard features to improve your workflow.",
    publishedAt: "2024-01-15",
  },
  {
    _id: "2",
    _title: "Performance Improvements",
    _slug: "performance-improvements",
    excerpt: "Major performance improvements across the platform.",
    publishedAt: "2024-01-10",
  },
];

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-[--text-secondary] dark:text-[--dark-text-secondary]">
          Latest updates and changes to our platform
        </p>
        <div className="mt-12">
          <ChangelogList posts={changelogPosts} />
        </div>
      </div>
    </div>
  );
}
