import { draftMode } from "next/headers";
import { getClient } from "@/sanity/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/queries";
import { AboutClient } from "./AboutClient";

export default async function AboutPage() {
  const { isEnabled } = await draftMode();
  const members = await getClient(isEnabled).fetch(
    TEAM_MEMBERS_QUERY,
    {},
    isEnabled ? { cache: "no-store" } : { next: { revalidate: 60 } },
  );
  return <AboutClient members={members ?? []} />;
}
