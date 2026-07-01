import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/queries";
import { TeamPageClient } from "./TeamPageClient";

export default async function TeamPage() {
  const { isEnabled } = await draftMode();
  const members = await getClient(isEnabled).fetch(
    TEAM_MEMBERS_QUERY,
    {},
    isEnabled ? { cache: "no-store" } : { next: { revalidate: 60 } },
  );
  return <TeamPageClient members={members ?? []} />;
}
