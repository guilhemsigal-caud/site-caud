import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { tokenClient } from "@/sanity/client";

export const { GET } = defineEnableDraftMode({
  client: tokenClient.withConfig({ token: process.env.SANITY_API_TOKEN }),
});
