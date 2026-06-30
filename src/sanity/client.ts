import { createClient } from "next-sanity";

export const projectId = "2svafw8h";
export const dataset = "production";
export const apiVersion = "2026-05-15";

// Public client — published content only, used by default
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Token client — can read drafts, used only when draft mode is enabled (server-side)
export const tokenClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "previewDrafts",
  stega: {
    studioUrl: process.env.SANITY_STUDIO_URL ?? "http://localhost:3333",
  },
});

export function getClient(preview: boolean) {
  return preview ? tokenClient : client;
}
