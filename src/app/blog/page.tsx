import { client } from "@/sanity/client";
import { BLOG_POSTS_QUERY } from "@/sanity/queries";
import { BLOG_POSTS } from "@/content/blog";
import type { BlogPost } from "@/content/blog";
import { BlogPageClient } from "./BlogPageClient";

export default async function BlogPage() {
  let posts: BlogPost[] = BLOG_POSTS;

  try {
    const sanityposts = await client.fetch<BlogPost[]>(BLOG_POSTS_QUERY, {}, { next: { revalidate: 60 } });
    if (sanityposts && sanityposts.length > 0) posts = sanityposts;
  } catch {
    // Sanity unavailable — fall back to static content
  }

  return <BlogPageClient posts={posts} />;
}
