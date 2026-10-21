import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { siteUrl } from "../data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/projects",
    ...projects.map((project) => `/projects/${project.slug}`),
  ];
  return [...paths, ...paths.map((path) => `/en${path}`)].map((path) => ({
    url: `${siteUrl}${path}`,
    alternates: {
      languages: {
        es: `${siteUrl}${path.replace(/^\/en/, "") || "/"}`,
        en: `${siteUrl}/en${path.replace(/^\/en/, "")}`,
      },
    },
  }));
}
