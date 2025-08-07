import { NextResponse } from "next/server";

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
    },
  },
];

export async function GET() {
  const baseUrl = "https://localhost:3000";
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog</title>
    <description>Latest blog posts and articles</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${post._title}</title>
      <description>${post.excerpt}</description>
      <link>${baseUrl}/blog/${post._slug}</link>
      <guid>${baseUrl}/blog/${post._slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author._title}</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
