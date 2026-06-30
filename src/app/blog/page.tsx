import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { BLOG_POSTS_QUERY } from "@/sanity/queries";
import { BLOG_POSTS } from "@/content/blog";
import type { BlogPost } from "@/content/blog";
import { BlogPageClient } from "./BlogPageClient";

export default async function BlogPage() {
  let posts: BlogPost[] = BLOG_POSTS;
  const { isEnabled } = await draftMode();

  try {
    const sanityposts = await getClient(isEnabled).fetch<BlogPost[]>(
      BLOG_POSTS_QUERY,
      {},
      isEnabled ? { cache: "no-store" } : { next: { revalidate: 60 } }
    );
    if (sanityposts && sanityposts.length > 0) posts = sanityposts;
  } catch {
    // Sanity unavailable — fall back to static content
  }

  return <BlogPageClient posts={posts} />;
}
