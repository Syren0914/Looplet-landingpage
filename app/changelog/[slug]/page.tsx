import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RichText } from "@/components/rich-text";

// Static changelog data
const changelogPosts = [
  {
    _id: "1",
    _title: "New Dashboard Features",
    _slug: "new-dashboard-features",
    excerpt: "We've added new dashboard features to improve your workflow.",
    publishedAt: "2024-01-15",
    content: "<p>This is the full content of the new dashboard features changelog...</p>",
  },
  {
    _id: "2",
    _title: "Performance Improvements",
    _slug: "performance-improvements",
    excerpt: "Major performance improvements across the platform.",
    publishedAt: "2024-01-10",
    content: "<p>This is the full content of the performance improvements changelog...</p>",
  },
];

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const post = changelogPosts.find((p) => p._slug === slug);

  if (!post) {
    return {
      title: "Changelog Post Not Found",
      description: "The requested changelog post could not be found.",
    };
  }

  return {
    title: post._title,
    description: post.excerpt,
  };
};

export default async function ChangelogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = changelogPosts.find((p) => p._slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              {post._title}
            </h1>
            {post.publishedAt && (
              <p className="mt-4 text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            )}
          </header>
          <div className="prose prose-zinc mx-auto max-w-none dark:prose-invert">
            <RichText content={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
