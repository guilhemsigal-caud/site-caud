import { draftMode } from "next/headers";

export async function DraftModeBanner() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;

  return (
    <div className="sticky top-0 z-[100] flex items-center justify-center gap-3 py-2 text-xs font-semibold text-white" style={{ background: "#7b3fff" }}>
      Preview mode — showing unpublished draft content
      <a href="/api/draft-mode/disable" className="underline underline-offset-2 hover:opacity-80">
        Exit preview
      </a>
    </div>
  );
}
