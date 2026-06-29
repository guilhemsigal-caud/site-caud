import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2svafw8h",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});