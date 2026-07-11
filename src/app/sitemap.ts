import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/quartos", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cafe-da-manha", priority: 0.7, changeFrequency: "monthly" },
  { path: "/eventos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/empresas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sobre", priority: 0.5, changeFrequency: "monthly" },
  { path: "/localizacao", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contato", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
