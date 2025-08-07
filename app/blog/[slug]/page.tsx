import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RichText } from "@/components/rich-text";

// Static blog data
const blogPosts = [
  {
    _id: "1",
    _title: "Getting Started with Our Platform",
    _slug: "getting-started",
    excerpt: "Learn how to get started with our platform and make the most of its features.",
    publishedAt: "2024-01-15",
    content: "<p>This is the full content of the getting started blog post...</p>",
    author: {
      _title: "John Doe",
      image: {
        url: "/placeholder-user.jpg",
        alt: "John Doe",
      },
    },
  },
  {
    _id: "2",
    _title: "Advanced Features Guide",
    _slug: "advanced-features",
    excerpt: "Discover advanced features that will help you optimize your workflow.",
    publishedAt: "2024-01-10",
    content: "<p>This is the full content of the advanced features blog post...</p>",
    author: {
      _title: "Jane Smith",
      image: {
        url: "/placeholder-user.jpg",
        alt: "Jane Smith",
      },
    },
  },
];

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p._slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post._title,
    description: post.excerpt,
  };
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p._slug === slug);

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
            <div className="mt-4 flex items-center gap-4">
              {post.author?.image && (
                <img
                  alt={post.author.image.alt ?? post.author._title}
                  className="h-10 w-10 rounded-full"
                  src={post.author.image.url}
                />
              )}
              <div>
                {post.author && (
                  <p className="font-medium text-[--text-primary] dark:text-[--dark-text-primary]">
                    {post.author._title}
                  </p>
                )}
                {post.publishedAt && (
                  <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </header>
          <div className="prose prose-zinc mx-auto max-w-none dark:prose-invert">
            <RichText content={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
