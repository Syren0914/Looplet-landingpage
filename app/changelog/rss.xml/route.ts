import { NextResponse } from "next/server";

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

export async function GET() {
  const baseUrl = "https://localhost:3000";
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Changelog</title>
    <description>Latest updates and changes to our platform</description>
    <link>${baseUrl}/changelog</link>
    <atom:link href="${baseUrl}/changelog/rss.xml" rel="self" type="application/rss+xml" />
    ${changelogPosts
      .map(
        (post) => `
    <item>
      <title>${post._title}</title>
      <description>${post.excerpt}</description>
      <link>${baseUrl}/changelog/${post._slug}</link>
      <guid>${baseUrl}/changelog/${post._slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
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
