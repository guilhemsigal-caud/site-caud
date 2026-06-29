import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { BLOG_POSTS_QUERY, BLOG_POST_QUERY } from "@/sanity/queries";
import { BLOG_POSTS } from "@/content/blog";
import type { BlogPost } from "@/content/blog";
import { BlogPostClient } from "./BlogPostClient";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post: BlogPost | undefined;
  let allPosts: BlogPost[] = BLOG_POSTS;

  try {
    const [sanityPost, sanityAll] = await Promise.all([
      client.fetch<BlogPost>(BLOG_POST_QUERY, { slug }, { next: { revalidate: 60 } }),
      client.fetch<BlogPost[]>(BLOG_POSTS_QUERY, {}, { next: { revalidate: 60 } }),
    ]);
    if (sanityPost) post = sanityPost;
    if (sanityAll?.length) allPosts = sanityAll;
  } catch {
    // Sanity unavailable — fall back to static content
  }

  if (!post) post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== slug && p.category === post!.category).slice(0, 3);

  return <BlogPostClient post={post} related={related} />;
}
