import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { PAGE_QUERY } from "@/sanity/queries";
import { SectionRenderer } from "@/components/page-builder/SectionRenderer";

export default async function CmsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const page = await getClient(isEnabled).fetch(
    PAGE_QUERY,
    { slug },
    isEnabled ? { cache: "no-store" } : { next: { revalidate: 60 } }
  );

  if (!page) notFound();

  return (
    <main>
      <SectionRenderer sections={page.sections ?? []} />
    </main>
  );
}
