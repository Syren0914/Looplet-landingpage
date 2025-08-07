import type { Metadata } from "next";
import { BlogPostCard } from "./_components/blogpost-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest blog posts and articles",
};

// Static blog data
const blogPosts = [
  {
    _id: "1",
    _title: "Getting Started with Our Platform",
    _slug: "getting-started",
    excerpt: "Learn how to get started with our platform and make the most of its features.",
    publishedAt: "2024-01-15",
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
    author: {
      _title: "Jane Smith",
      image: {
        url: "/placeholder-user.jpg",
        alt: "Jane Smith",
      },
    },
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
          Blog
        </h1>
        <p className="mt-4 text-lg text-[--text-secondary] dark:text-[--dark-text-secondary]">
          Latest blog posts and articles
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogPostCard key={post._id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
